import toDOM from "domify";
import asObject from "as/object";

import _test from "./_/test";
let test = _test("VirtualAttribute");

import circles from "./_/fixtures/circles";

import VirtualAttribute from "../source/virtual-attribute";


test("Just curious what the results are", (is) => {
  let svg = toDOM(circles);

  var circle = svg.getElementById("circle-simple");
  var attributes = asObject(
    Array.from(circle.attributes).map(attribute => (
    { key: attribute.name
    , value: new VirtualAttribute(attribute, circle)
    })));
  console.log(attributes);

  is.end();
  });
