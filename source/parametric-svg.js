import virtualTree from "./virtual-tree";
import getParameters from "./utils/get-parameters";
import validateParameter from "./utils/validate-parameter";


export default function parametricSVG (root, parameters={}) {
  let tree, svgRoot, element;

  let parsedParameters = {};
  for (let parameter in parameters) if (parameters.hasOwnProperty(parameter)) {
    parsedParameters[parameter] = validateParameter(parameters[parameter]);
    }

   /**
    * Parse and render all elements within the `svgRoot`. Defaults set with `<ref>` elements
    * will be used for calculation, unless you override them with `parameters`.
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
    *
    * @function parametricSVG
    */
  if ((svgRoot = root) instanceof SVGSVGElement) {
    tree = new virtualTree
      ( Array.from(svgRoot.childNodes)
      , { parameters: Object.assign
          ( getParameters(svgRoot)
          , parsedParameters
          )
        }
      );
    }


   /**
    * Pass any SVG node (like `<circle>`) to parse and render the node and all its descendants.
    *
    * @param  {SVGElement}  element
    *
    * @param  {Object}  parameters
    *   A hash of parameters.
    *
    * @returns {VirtualTree}
    *   A cached virtual DOM tree for lightning-fast redraws.
    *
    * @function parametricSVG
    */
  else if ((element = root) instanceof SVGElement) {
    tree = new VirtualTree
      ( [element]
      , {parameters: parsedParameters}
      );
    }

   /**
    * Pass a cached `VirtualTree` to render the tree without reparsing any DOM. This is the fastest
    * option.
    *
    * @param  {VirtualTree}  virtualTree
    *
    * @param  {Object}  [parameters]
    *   Supply a hash of additional parameters. They'll extend and replace cached ones.
    *
    * @returns {VirtualTree}
    *   A cached virtual DOM tree for lightning-fast redraws.
    *
    * @function parametricSVG
    */
  }
