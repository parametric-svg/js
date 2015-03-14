import "babel/polyfill";
import asObject from "as/object";
import evalExpression from "eval-expression";

import validateParameter from "./validate-parameter";
import warn from "./warn";

import
  { PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX
  , SVG_NAMESPACE, SVG_NAMESPACE_PREFIX
  } from "../settings";

function namespaceParameters (svgRoot, namespace, prefix=null) {
  let textContent;
  // Get `<ref>` elements belonging to the `namespace`,
  let elements = Array.from(svgRoot.getElementsByTagNameNS
    ( namespace
    , "ref"
    ));

  // …or fall back to `<prefix:ref>` (no namespace support in HTML5).
  if (!elements.length && prefix) elements
    = Array.from(svgRoot.getElementsByTagName(prefix + ":ref"))
    ;

  // Map the keys and values to an object and return.
  return asObject(elements.map(element => {
    let value, error, validated;
    let key = element.getAttribute("param");
    let rawValue =
      (  element.getAttribute("default")
      || (textContent = element.firstChild) && textContent.nodeValue
      || "null"
      );

    try {
      validated = validateParameter(evalExpression(rawValue));
      }
    catch (e) {error = e;}
    if (!error) {
      value = validated.value;
      error = validated.error;
      }
    if (error) warn
      ( "Error while parsing default parameter.\n"
      + "Element:", element, "\n"
      + "Error:", error
      );

    return (
      { key
      , value: {error, value}
      });
    }));
  }


export default function getParameters (svgRoot) {
  return Object.assign({}
    , namespaceParameters(svgRoot, SVG_NAMESPACE, SVG_NAMESPACE_PREFIX)
    , namespaceParameters(svgRoot, PARAMETRIC_NAMESPACE, PARAMETRIC_NAMESPACE_PREFIX)
    );
  }
