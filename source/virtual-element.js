import VirtualAttribute from "./virtual-attribute";


export default class VirtualElement {
  constructor (element) {
    Object.assign(this,
      { element
      , attributes: Array.from(element.attributes)
        .map(attribute => new VirtualAttribute(element, attribute))
      });
    }
  }
