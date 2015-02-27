 /**
  * @function parametricSVG
  *
  * @param  {SVGSVGElement}  root
  *   Pass an `<svg>` element to parse and render all elements within it, including parameters.
  *
  * @param  {Object}  [parameters]
  *   Supply a hash of additional parameters. They'll extend and override those set with `<param>`.
  *
  * @returns {VirtualTree}
  *   A cached virtual DOM tree for lightning-fast redraws.
  */

 /**
  * @function parametricSVG
  *
  * @param  {SVGElement}  element
  *   Pass any SVG node to parse and render the node and all its descendants.
  *
  * @param  {Object}  parameters
  *   Supply a hash of parameters.
  *
  * @returns {VirtualTree}
  *   A cached virtual DOM tree for lightning-fast redraws.
  */

 /**
  * @function parametricSVG
  *
  * @param  {VirtualTree}  virtualTree
  *   Pass a cached tree to redraw the tree without reparsing DOM. This is the fastest option.
  *
  * @param  {Object}  [parameters]
  *   Supply a hash of additional parameters. They'll extend and replace the cached ones.
  *
  * @returns {VirtualTree}
  *   A cached virtual DOM tree for lightning-fast redraws.
  */
