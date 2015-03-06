import {PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX} from "./settings";

import parseParametricValue from "./utils/parse-parametric-value";


export default class ParametricAttribute {
  constructor (attribute, element) {
    var name = attribute.localName;

    // Error if the `attribute` doesn't belong to the `element`'s namespace.
    if (attribute.namespaceURI !== PARAMETRIC_NAMESPACE) {
      let attributeNameParts;
      if (  (attributeNameParts = name.split(":")).length == 2
         && attributeNameParts[0] == PARAMETRIC_NAMESPACE_PREFIX
         ) name = attributeNameParts[1];
      else return {error: new Error("Not a parametric attribute.")};
      }

    // Error if the parametric attribute is invalid.
    let parametricFunction = parseParametricValue(attribute.value);
    { let error;
      if ((error = parametricFunction.error)) return {error};
    }

    // Otherwise all is well. Populate the properties.
    return Object.assign(this,
      { name
      , element
      , parameterNames: parametricFunction.parameterNames
      , func: parametricFunction.func
      });
    }


  update (...args) {
    this.element.setAttributeNS(null, this.name
      , this.func(...args)
      );
    return this;
    }
  }
