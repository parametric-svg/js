[![Travis CI](https://img.shields.io/travis/parametric-svg/js/master.svg?style=flat-square)](https://travis-ci.org/parametric-svg/js)
 [![Code climate](https://img.shields.io/codeclimate/github/parametric-svg/js.svg?style=flat-square)](https://codeclimate.com/github/parametric-svg/js)
 [![David DM](https://img.shields.io/david/parametric-svg/js.svg?style=flat-square)](http://david-dm.org/parametric-svg/js)




<h1 align="center">
  <img alt="parametric.svg" src="https://rawgit.com/parametric-svg/parametric.svg/master/assets/logo.svg" />
</h1>

**Parametric 2D graphics in the browser. With pure SVG.**




Installation
------------

```sh
$ npm install parametric-svg
```




API
---


### `parametricSVG (root, [parameters])`



### Parameters

| parameter      | type          | description                                                                                                         |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `root`         | SVGSVGElement |   Pass an &amp;lt;svg&amp;gt; element to parse and render all elements within it, including parameters.                     |
| `[parameters]` | Object        | _optional:_   Supply a hash of additional parameters. They&amp;#39;ll extend and override those set with &amp;lt;param&amp;gt;. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `parametricSVG (element, parameters)`



### Parameters

| parameter    | type       | description                                                               |
| ------------ | ---------- | ------------------------------------------------------------------------- |
| `element`    | SVGElement |   Pass any SVG node to parse and render the node and all its descendants. |
| `parameters` | Object     |   Supply a hash of parameters.                                            |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.


### `parametricSVG (virtualTree, [parameters])`



### Parameters

| parameter      | type        | description                                                                                           |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `virtualTree`  | VirtualTree |   Pass a cached tree to redraw the tree without reparsing DOM. This is the fastest option.            |
| `[parameters]` | Object      | _optional:_   Supply a hash of additional parameters. They&amp;#39;ll extend and replace the cached ones. |



**Returns** `VirtualTree`,   A cached virtual DOM tree for lightning-fast redraws.






License
-------

[MIT][] © [Tomek Wiszniewski][].


[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
