import virtualTree from "./virtual-tree";
import getParameters from "./utils/get-parameters";


export default function parametricSVG (root, parameters={}) {
  let tree, svgRoot;

   /**
    * @function parametricSVG
    *   Parse and render all elements within the `svgRoot`. Defaults set with `<ref>` elements
    *   will be used for calculation, unless you override them with `parameters`.
    *
    * @param  {SVGSVGElement}  svgRoot
    *   An `<svg>` element.
    *
    * @param  {Object}  [parameters]
    *   A hash of additional parameters. They'll extend and override defaults set with `<ref>`
    *   elements.
    *
    * @returns {VirtualTree}
    *   A cached virtual DOM tree for lightning-fast redraws.
    */
  if ((svgRoot = root) instanceof SVGSVGElement) {
    tree = new virtualTree
      ( Array.from(svgRoot.childNodes)
      , getParameters(svgRoot)
      );


   /**
    * @function parametricSVG
    *   Pass any SVG node (like `<circle>`) to parse and render the node and all its descendants.
    *
    * @param  {SVGElement}  element
    *
    * @param  {Object}  parameters
    *   A hash of parameters.
    *
    * @returns {VirtualTree}
    *   A cached virtual DOM tree for lightning-fast redraws.
    */

   /**
    * @function parametricSVG
    *   Pass a cached `VirtualTree` to render the tree without reparsing any DOM. This is the fastest
    *   option.
    *
    * @param  {VirtualTree}  virtualTree
    *
    * @param  {Object}  [parameters]
    *   Supply a hash of additional parameters. They'll extend and replace cached ones.
    *
    * @returns {VirtualTree}
    *   A cached virtual DOM tree for lightning-fast redraws.
    */
  }
