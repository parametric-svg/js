import toDOM from "domify";

import _test from "../_/test";
let test = _test("parametric-svg behavior");

import staticFixture from "../_/fixtures/static";

import parametricSVG from "../../source/parametric-svg";


test("Changes nothing when no attribute is parametric", (is) => {
  let svg = toDOM(staticFixture);
  let snapshot = svg.outerHTML;
  parametricSVG(svg);

  let container = document.createElement("div");
  container.appendChild(svg);

  is.equal
    ( svg.outerHTML
    , snapshot
    , "you bet!"
    );

  is.end();
  });


test.skip("Replaces simple values", (is) => {
  });


test.skip("Knows maths", (is) => {
  });


test.skip("Works with strings", (is) => {
  });


test.skip("Knows logic", (is) => {
  });


test.skip("Throws on unsupported types", (is) => {
  });
