/**
 * @class VirtualTree
 */

export default class VirtualTree
  { constructor(entryPoints, initial) {
    let self = this;

    // Extend the instance's properties with `initial`.
    Object.assign(this
      , { parameters: {}
        , elements: []
        }
      , initial
      );

    // Populate `this.elements`.
    entryPoints.forEach(function recurse (element) {
      self.elements.push(element);
      Array.from(element.childNodes).forEach(recurse);
      });
    }
  }
