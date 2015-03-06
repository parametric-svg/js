import {SVG_NAMESPACE} from "./settings";
import ParametricAttribute from "./parametric-attribute";
import warn from "./utils/warn";

let getParameter = (virtualTree) => function getParameter (name) {
  let parameter = virtualTree._parameters[name];
  if (!parameter || parameter.error) {
    warn
      ( `Error while attempting to use the parameter \`${name}\`.`
      , (parameter && parameter.error) || "It hasn't been declared."
      );
    return;
    }
  return parameter.value;
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
      // passing relevant values from `this._parameters`.
      parametricAttribute.update(
        ...parametricAttribute.parameterNames.map(getParameter(this))
        );
      });

    // Allow chaining.
    return this;
    }
  }
