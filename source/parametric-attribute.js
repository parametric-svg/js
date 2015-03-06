import {PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX} from "./settings";

import parseParametricValue from "./utils/parse-parametric-value";


export default class ParametricAttribute {
  constructor (attribute, element) {
    let attributeName = attribute.localName;

    // Return `.invalid` if the `attribute` doesn't belong to the `element`'s namespace.
    if (attribute.namespaceURI !== PARAMETRIC_NAMESPACE) {
      let attributeNameParts;
      if (  (attributeNameParts = attributeName.split(":")).length == 2
         && attributeNameParts[0] == PARAMETRIC_NAMESPACE_PREFIX
         ) attributeName = attributeNameParts[1];
      else return {error: new Error("Not a parametric attribute.")};
      }

    // Find the counterpart static attribute.
    console.log(element);
    let counterpart =
      (  element.getAttributeNodeNS && element.getAttributeNodeNS(null, attributeName)
      || element.getAttribute(attributeName)
      || null
      );

    // Return `.error` if the parametric attribute is invalid.
    let parametricFunction = parseParametricValue(attribute.value);
    { let error;
      if ((error = parametricFunction.error)) return {error};
    }

    // Otherwise all is well. Populate the properties.
    return Object.assign(this,
      { attribute
      , counterpart
      , parameterNames: parametricFunction.parameterNames
      , func: parametricFunction.func
      });
    }
  }
