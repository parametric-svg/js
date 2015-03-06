import {PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX} from "./settings";

import parseParametricValue from "./utils/parse-parametric-value";


export default class ParametricAttribute {
  constructor (attribute, element) {
    // Return `.invalid` if the `attribute` doesn't belong to the `element`'s namespace.
    if (attribute.namespaceURI !== null) return {invalid: true};

    // Find the paired parametric attribute.
    let attributeName = attribute.localName;
    let parametricAttribute =
      (  element.getAttributeNodeNS(PARAMETRIC_NAMESPACE, attributeName)
      || element.getAttributeNode(PARAMETRIC_NAMESPACE_PREFIX + ":" + attributeName)
      || null
      );

    // Return `.static` if no pair has been found.
    if (!parametricAttribute) return {static: true};

    // Return `.error` if the parametric attribute is invalid.
    let parametricFunction = parseParametricValue(parametricAttribute.value);
    { let error;
      if ((error = parametricFunction.error)) return {error};
    }

    // Otherwise all is well. Populate the properties.
    return Object.assign(this,
      { attribute
      , parameterNames: parametricFunction.parameterNames
      , func: parametricFunction.func
      });
    }
  }
