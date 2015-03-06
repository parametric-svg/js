import toDOM from "domify";
import asObject from "as/object";

import _test from "./_/test";
let test = _test("parametric-attribute");

import circles from "./_/fixtures/circles";

import ParametricAttribute from "../source/parametric-attribute";


let svg = toDOM(circles);

let circle = svg.getElementById("circle-factor-plus");
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


test("Returns what it should return", (is) => {

  is.equal
    ( pAttributes.filter(pAttribute => (
      (  pAttribute instanceof ParametricAttribute
      && !pAttribute.error
      )))
      .length
    , 2
    , "returning a ParametricAttribute for every parametric attribute"
    );

  is.equal
    ( pAttributes.filter(pAttribute => pAttribute.error)
      .length
    , pAttributes.length - 1
    , "erroring otherwise"
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
    , "…or saying `null` otherwise"
    );

  is.deepEqual
    ( parametricR.parameterNames
    , ["factor", "plus"]
    , "spotting parameters it depends on"
    );

  is.equal
    ( parametricFill.func("green")
    , "green"
    , "with a simple attribute replacement"
    );

  is.equal
    ( parametricR.func(3, 2)
    , 3 * 3 + 2
    , "with an attribute equation"
    );
  });
