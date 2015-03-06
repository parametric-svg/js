import toDOM from "domify";
import asObject from "as/object";

import _test from "./_/test";
let test = _test("parametric-attribute");

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


test("Does what a ParametricAttribute should do", (is) => {
  let parametricR = vAttributeHash["parametric:r"];
  let parametricFill = vAttributeHash["parametric:fill"];

  is.equal
    ( parametricR.counterpart.name
    , "r"
    , "finding its counterpart static attribute"
    );

  is.equal
    ( parametricFill.counterpart
    , null
    , "...or saying `null` otherwise"
    );

  is.deepEqual
    ( parametricR.parameterNames
    , ["factor", "plus"]
    , "spotting parameters it depends on"
    );

  is.equal
    ( parametricFill.func("blue")
    , "blue"
    , "with a simple attribute replacement"
    );

  is.equal
    ( parametricR.func(5, 6)
    , 2 * 5 + 6
    , "with an attribute equation"
    );

  is.end();
  });
