import tape from "tape-catch";

import toDOM from "domify";
import parametricSVG from "../source/parametric-svg";

import circle from "./fixtures/circle";

function test (title, ...rest) {
  return tape("parametricSVG:  " + title, ...rest);
  }


test("Works with an SVG document root", (is) => {
  let svg = toDOM(circle);
  parametricSVG(svg);

  is.ok
    ( svg instanceof SVGSVGElement
    , "leaving the SVG root intact"
    );
  is.equal
    ( svg.getElementById("circle-r-6").getAttribute("r")
    , "6"
    );
  is.end();
  });


test("Works with an SVG element", (is) => {
  is.end();
  });


test("Works with a VirtualTree", (is) => {
  is.end();
  });


test("Changes nothing when no attribute is parametric", (is) => {
  is.end();
  });


test("Creates a new attribute", (is) => {
  is.end();
  });


test("Updates an existing attribute", (is) => {
  is.end();
  });


test("Changes multiple attributes at once", (is) => {
  is.end();
  });
