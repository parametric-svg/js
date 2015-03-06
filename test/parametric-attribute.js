import toDOM from "domify";
import asObject from "as/object";

import _test from "./_/test";
let test = _test("parametric-attribute");

import {INITIAL_R} from "./_/fixtures/circles/data";
import circles from "./_/fixtures/circles";

import ParametricAttribute from "../source/parametric-attribute";


let svg = toDOM(circles);

let circle = svg.getElementById("circle-factor-plus-fill");
let attributes = Array.from(circle.attributes);
let pAttributes = attributes.map(attribute => (
  new ParametricAttribute(attribute, circle)
  ));

let vAttributeHash = asObject(
  attributes.map((attribute, index) => (
    { key: attribute.name
    , value: pAttributes[index]
    }))
  );
let parametricR = vAttributeHash["parametric:r"];
let parametricFill = vAttributeHash["parametric:fill"];
let expectedPAttributes = 2;


test("Returns what it should return", (is) => {

  is.equal
    ( pAttributes.filter(pAttribute => (
      (  pAttribute instanceof ParametricAttribute
      && !pAttribute.error
      )))
      .length
    , expectedPAttributes
    , "a ParametricAttribute for every parametric attribute"
    );

  is.equal
    ( pAttributes.filter(pAttribute => pAttribute.error)
      .length
    , pAttributes.length - expectedPAttributes
    , "otherwise an error"
    );

  is.end();
  });


test("Parses the DOM", (is) => {

  is.deepEqual
    ( parametricR.parameterNames
    , ["factor", "plus"]
    , "spotting parameters it depends on"
    );

  is.end();
  });


test("Updates the DOM", (is) => {

  parametricFill.update("blue");
  is.equal
    ( circle.getAttributeNS(null, parametricFill.name)
    , "blue"
    , "through simple attribute replacement"
    );

  parametricR.update(5, 6);
  is.equal
    ( circle.getAttributeNS(null, parametricR.name)
    , "" + (INITIAL_R * 5 + 6)
    , "through an equation"
    );

  is.end();
  });
