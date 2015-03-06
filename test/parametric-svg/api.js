import toDOM from "domify";

import _test from "../_/test";
let test = _test("parametric-svg API");

import parametricSVG from "../../source/parametric-svg";
import VirtualTree from "../../source/virtual-tree";

import {SIMPLE} from "../_/fixtures/circles/data";
import circles from "../_/fixtures/circles";


test("Explodes when things go wrong", (is) => {
  is.plan(2);

  try {parametricSVG(/anything/);}
  catch (error) {is.equal
    ( error && error.constructor
    , TypeError
    , "throwing a TypeError when `root` is wrong"
    );}

  try {parametricSVG(toDOM(circles), "anything");}
  catch (error) {is.equal
    ( error && error.constructor
    , TypeError
    , "throwing a TypeError when `parameters` is not an object"
    );}

  is.end();
  });


test("Works with an SVG document root", (is) => {
  let svg = toDOM(circles);
  let tree = parametricSVG(svg);

  let container = document.createElement("div");
  container.appendChild(svg);

  is.ok
    (  svg instanceof SVGSVGElement
    && svg.parentNode == container
    , "leaving the SVG root intact and in place"
    );

  is.ok
    ( tree instanceof VirtualTree
    , "returning a VirtualTree"
    );

  is.equal
    ( svg.getElementById("circle-simple").getAttributeNS(null, "r")
    , "" + SIMPLE
    , "updating the SVG DOM"
    );

  is.end();
  });


test("Works with an SVG element", (is) => {
  let circle = toDOM(circles).getElementById("circle-simple");
  let tree = parametricSVG(circle, {simple: 50});

  let circleParent = circle.parentNode;
  is.ok
    (  circle instanceof SVGElement
    && circle.parentNode == circleParent
    , "leaving the element intact and in place"
    );

  is.ok
    ( tree instanceof VirtualTree
    , "returning a VirtualTree"
    );

  is.equal
    ( circle.getAttributeNS(null, "r")
    , "50"
    , "updating the element's DOM"
    );

  is.end();
  });


test("Works with a VirtualTree", (is) => {
  let svg = toDOM(circles);
  let tree = parametricSVG(svg);

  let container = document.createElement("div");
  container.appendChild(svg);

  tree = parametricSVG(tree, {simple: 100});

  is.ok
    (  svg instanceof SVGSVGElement
    && svg.parentNode == container
    , "leaving the original SVG root intact and in place"
    );

  is.ok
    ( tree instanceof VirtualTree
    , "returning a VirtualTree"
    );

  is.equal
    ( svg.getElementById("circle-simple").getAttributeNS(null, "r")
    , "100"
    , "updating the SVG DOM"
    );

  is.end();
  });
