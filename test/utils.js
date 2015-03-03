import domify from "domify";

import _test from "./_/test";
let test = _test("utils");

import getParameters from "../source/utils/get-parameters";

import svgString from "./_/fixtures/parameters";


test("`getParameters` works", (is) => {
  let parameters = getParameters(domify(svgString));

  is.equal
    ( parameters.native.value
    , "works"
    , "with `<ref>`s from the native SVG namespace"
    );

  is.equal
    ( parameters.parametric.value
    , "works as well"
    , "with `<ref>`s from the parametric namespace"
    );

  is.equal
    ( parameters.overridden.value
    , "yup"
    , "overriding native `<ref>`s with `<parametric:ref>`s"
    );

  is.end();
  });
