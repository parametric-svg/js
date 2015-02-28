import "babel/polyfill";
import asObject from "as/object";

import
  { PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX
  , SVG_NAMESPACE, SVG_NAMESPACE_PREFIX
  } from "../settings";

function namespaceParameters (svgRoot, namespace, prefix=null) {
  let textContent;
  // Get `<ref>` elements of the namespace.
  let elements = Array.from(svgRoot.getElementsByTagNameNS
    ( namespace
    , "ref"
    ));
  // Fall back to `<prefix:ref>` (no namespace support in HTML5).
  if (!elements.length && prefix) elements
    = Array.from(svgRoot.getElementsByTagName(prefix + ":ref"))
    ;

  // Map the keys and values to an object and return.
  return asObject(elements.map(element => (
    { key: element.getAttribute("param")
    , value:
      (  element.getAttribute("default")
      || (textContent = element.firstChild) && textContent.nodeValue
      || null
      )
    })));
  }


export default function getParameters (svgRoot) {
  console.log(require("format-json").diffy(namespaceParameters(svgRoot, PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX)));
  return Object.assign({}
    , namespaceParameters(svgRoot, SVG_NAMESPACE, SVG_NAMESPACE_PREFIX)
    , namespaceParameters(svgRoot, PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX)
    );
  }
