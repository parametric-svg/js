import {SVG_NAMESPACE} from "./settings";
import ParametricAttribute from "./parametric-attribute";
import warn from "./utils/warn";

let getParameter = (virtualTree) => function getParameter (name) {
  return (virtualTree._parameters[name]
    || { error: new ReferenceError("Parameter not declared")
       }
    );
  };


/**
 * @class VirtualTree
 */

export default class VirtualTree {

  constructor (entryPoints, properties) {
    // Extend the instance's properties with `properties`.
    Object.assign(this
      , { _parameters: {}
        , _parametricAttributes: []
        }
      , properties
      );

    // Populate `this._parameters`.
    let parametricAttributes = this._parametricAttributes;
    let pushAttributeIfValid = (element) => (attribute) => {
      let parametricAttribute = new ParametricAttribute(attribute, element);
      if (!parametricAttribute.error) parametricAttributes.push(parametricAttribute);
      };
    entryPoints.forEach(function recurse (element) {
      if (element.namespaceURI === SVG_NAMESPACE) {
        Array.from(element.attributes).forEach(pushAttributeIfValid(element));
        }
      Array.from(element.childNodes).forEach(recurse);
      });

    // Allow chaining.
    return this;
    }


  _render () {
    // Call `.update()` on every ParametricAttribute,
    this._parametricAttributes.forEach(parametricAttribute => {
      let parameters = parametricAttribute.parameterNames.map(getParameter(this))

      // ...warning if errors have been found,
      let errors = parameters.filter(parameter => parameter.error);
      if (errors.length) errors.forEach(parameter => warn
        ( `Error while attempting to evaluate \`parametric:${parametricAttribute.name}\`.\n`
        + "Element:", parametricAttribute.element, "\n"
        + "Error:", parameter.error
        ));

      // ...or passing relevant values from `this._parameters`.
      else parametricAttribute.update(
        ...parameters.map(parameter => parameter.value)
        );
      });

    // Allow chaining.
    return this;
    }
  }
