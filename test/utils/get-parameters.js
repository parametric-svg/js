import domify from "domify";

import _test from "../_/test";
let test = _test("utils/getParameters");

import getParameters from "../../source/utils/get-parameters";

import _parameters from "../_/fixtures/parameters";
let parameters = getParameters(domify(_parameters));


test("Handles parameter declarations the right way", (is) => {

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

  is.equal
    ( parameters.inline.value
    , "all is well"
    , "with inline `<ref>` content"
    );

  is.equal
    ( parameters["last-wins"].value
    , "victory"
    , "overriding earlier `<ref>`s with later ones"
    );

  is.equal
    ( parameters["default-wins"].value
    , "won"
    , "overriding inline `<ref>` content with the default attribute"
    );

  is.end();
  });


test("Works with different data types", (is) => {

  is.equal
    ( parameters["number-nine"].value
    , 9
    , "numbers"
    );

  is.equal
    ( parameters["boolean-true"].value
    , true
    , "booleans"
    );

  is.equal
    ( parameters["string-alright"].value
    , "alright"
    , "single-quoted strings"
    );

  is.equal
    ( parameters["string-double-quoted"].value
    , "Double quoted"
    , "double-quoted strings"
    );

  is.end();
  });
