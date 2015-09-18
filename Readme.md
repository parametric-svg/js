[![Travis CI](https://img.shields.io/travis/parametric-svg/js/master.svg?style=flat-square)](https://travis-ci.org/parametric-svg/js)
 [![Code climate](https://img.shields.io/codeclimate/github/parametric-svg/js.svg?style=flat-square)](https://codeclimate.com/github/parametric-svg/js)
 [![David DM](https://img.shields.io/david/parametric-svg/js.svg?style=flat-square)](http://david-dm.org/parametric-svg/js)




<h1 align="center">
  <img alt="parametric.svg" src="https://cdn.rawgit.com/parametric-svg/identity/v1.0.0/logo/basic.svg" />
</h1>

**Parametric 2D graphics in the browser. With pure SVG.**

**Heads up!** This package is based on an earlier version of the spec. We’re planning to [update it](https://github.com/parametric-svg/js/issues/2) – but for now you’re better off using the [`<parametric-svg>`](https://github.com/parametric-svg/element) custom element or the pair of low-level libraries *[parse](https://github.com/parametric-svg/parse)* and *[patch](https://github.com/parametric-svg/patch)*.




Installation
------------

```sh
$ npm install parametric-svg
```




Usage
-----

```js
var parametricSvg = require('parametric-svg');
```

…or:

```html
<script src="https://wzrd.in/standalone/parametric-svg@0.0.5"></script>
```

What then? All I’ve got is this quick example – it must do for now: <http://jsbin.com/matisi/7/edit?html,js,output>.




API
---


### `parametricSVG(svgRoot, [parameters])`

Parse and render all elements within the svgRoot. Defaults set with &lt;ref&gt; elements will be used for calculation, unless you override them with parameters.

### Parameters

| parameter      | type          | description                                                                                                              |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `svgRoot`      | SVGSVGElement |   An &lt;svg&gt; element.                                                                                                |
| `[parameters]` | Object        | _optional:_   A hash of additional parameters. They&#39;ll extend and override defaults set with &lt;ref&gt;   elements. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `parametricSVG(element, parameters)`

Pass any SVG node (like &lt;circle&gt;) to parse and render the node and all its descendants.

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
| `[parameters]` | Object      | _optional:_   Supply a hash of additional parameters. They&#39;ll extend and replace cached ones. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `undefined`








License
-------

[MIT][] © [Tomek Wiszniewski][].


[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
