import toDOM from "domify";
import asObject from "as/object";

import _test from "./_/test";
let test = _test("virtual-attribute");

import circles from "./_/fixtures/circles";

import VirtualAttribute from "../source/virtual-attribute";


let svg = toDOM(circles);

let circle = svg.getElementById("circle-factor-plus");
let attributes = Array.from(circle.attributes);
let vAttributeList = attributes.map(attribute => (
  new VirtualAttribute(attribute, circle)
  ));
let vAttributes = asObject(
  attributes.map((attribute, index) => (
    { key: attribute.name
    , value: vAttributeList[index]
    }))
  );


test("Returns what it should return", (is) => {

  is.equal
    ( vAttributeList.filter(vAttribute => (
      (  vAttribute instanceof VirtualAttribute
      && !vAttribute.error
      )))
      .length
    , 2
    , "returning a VirtualAttribute for every parametric attribute"
    );

  is.equal
    ( vAttributeList.filter(vAttribute => vAttribute.error)
      .length
    , vAttributeList.length - 1
    , "erroring otherwise"
    );

  is.end();
  });


test("Does what it should do", (is) => {
  let parametricR = vAttributes["parametric:r"];
  let parametricFill = vAttributes["parametric:fill"];

  is.equal
    ( parametricR.counterpart.name
    , "r"
    , "finding its pair static attribute"
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
