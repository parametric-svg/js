[![Travis CI](https://img.shields.io/travis/parametric-svg/js/master.svg?style=flat-square)](https://travis-ci.org/parametric-svg/js)
 [![Code climate](https://img.shields.io/codeclimate/github/parametric-svg/js.svg?style=flat-square)](https://codeclimate.com/github/parametric-svg/js)
 [![David DM](https://img.shields.io/david/parametric-svg/js.svg?style=flat-square)](http://david-dm.org/parametric-svg/js)




<h1 align="center">
  <img alt="parametric.svg" src="https://rawgit.com/parametric-svg/parametric.svg/master/assets/logo.svg" />
</h1>

**Parametric 2D graphics in the browser. With pure SVG.**

**Heads up!** This package is in an early development stage. Not ready for use yet.




Installation
------------

```sh
$ npm install parametric-svg
```




API
---


### `parametricSVG(svgRoot, [parameters])`

Parse and render all elements within the svgRoot. Defaults set with &amp;lt;ref&amp;gt; elements will be used for calculation, unless you override them with parameters.

### Parameters

| parameter      | type          | description                                                                                                              |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `svgRoot`      | SVGSVGElement |   An &amp;lt;svg&amp;gt; element.                                                                                                |
| `[parameters]` | Object        | _optional:_   A hash of additional parameters. They&amp;#39;ll extend and override defaults set with &amp;lt;ref&amp;gt;   elements. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `parametricSVG(element, parameters)`

Pass any SVG node (like &amp;lt;circle&amp;gt;) to parse and render the node and all its descendants.

### Parameters

| parameter    | type       | description             |
| ------------ | ---------- | ----------------------- |
| `element`    | SVGElement |                         |
| `parameters` | Object     |   A hash of parameters. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `parametricSVG(virtualTree, [parameters])`

Pass a cached VirtualTree to render the tree without reparsing any DOM. This is the fastest option.

### Parameters

| parameter      | type        | description                                                                                       |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `virtualTree`  | VirtualTree |                                                                                                   |
| `[parameters]` | Object      | _optional:_   Supply a hash of additional parameters. They&amp;#39;ll extend and replace cached ones. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.






License
-------

[MIT][] © [Tomek Wiszniewski][].


[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
