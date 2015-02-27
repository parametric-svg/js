import tape from "tape-catch";

import toDOM from "domify";
import parametricSVG from "../source/parametric-svg";

import circle from "./fixtures/circle";

function test (title, ...rest) {
  return tape("parametricSVG:  " + title, ...rest);
  }
test.__proto__ = tape;


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


test.skip("Works with an SVG element", (is) => {
  is.end();
  });


test.skip("Works with a VirtualTree", (is) => {
  is.end();
  });


test.skip("Changes nothing when no attribute is parametric", (is) => {
  is.end();
  });


test.skip("Creates a new attribute", (is) => {
  is.end();
  });


test.skip("Updates an existing attribute", (is) => {
  is.end();
  });


test.skip("Changes multiple attributes at once", (is) => {
  is.end();
  });
