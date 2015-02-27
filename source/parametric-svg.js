 /**
  * @function parametricSVG
  *   Parse and render all elements within the `<svg>` `root` node. Parameters declared with
  *   `<param>` elements will be used for calculation, unless you override them with `parameters`.
  *
  * @param  {SVGSVGElement}  root
  *
  * @param  {Object}  [parameters]
  *   A hash of additional parameters. They'll extend and override those declared with `<param>`
  *   elements.
  *
  * @returns {VirtualTree}
  *   A cached virtual DOM tree for lightning-fast redraws.
  */

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
