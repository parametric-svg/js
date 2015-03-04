import {SVG_NAMESPACE} from "./settings";
import VirtualElement from "./virtual-element";


/**
 * @class VirtualTree
 */

export default class VirtualTree {
  constructor (entryPoints, properties) {
    let self = this;

    // Extend the instance's properties with `properties`.
    Object.assign(self
      , { parameters: {}
        , elements: []
        }
      , properties
      );

    // Populate `this.elements`.
    entryPoints.forEach(function recurse (element) {
      if (element.namespaceURI === SVG_NAMESPACE) {
        self.elements.push(new VirtualElement(element));
        }

      Array.from(element.childNodes).forEach(recurse);
      });
    }

  render () {
    this.elements.forEach(element => {
      Array.from(element.attributes).filter(attribute =>
        {})
      })
    }
  }
