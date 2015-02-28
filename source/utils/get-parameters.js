import "babel/polyfill";
import asObject from "as/object";

import {PARAMETRIC_NAMESPACE, SVG_NAMESPACE} from "../settings";

function namespaceParameters (svgRoot, namespace) {
  let textContent;

  return asObject(
    Array.from(svgRoot.getElementsByTagNameNS
      ( namespace
      , "ref"
      )).map(element => (
        { key:
          (  element.getAttributeNS(namespace, "param")
          || element.getAttribute("param")
          )
        , value:
          (  element.getAttributeNS(namespace, "default")
          || element.getAttribute("default")
          || ((textContent = element.firstChild) && textContent.nodeValue)
          || null
          )
        })
      )
    );
  }


export default function getParameters (svgRoot) {
  return Object.assign({}
    , namespaceParameters(svgRoot, SVG_NAMESPACE)
    , namespaceParameters(svgRoot, PARAMETRIC_NAMESPACE)
    );
  }
