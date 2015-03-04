import _test from "../_/test";
let test = _test("utils/parseParametricValue");

import parseParametricValue from "../../source/utils/parse-parametric-value";


test("Fishes out parameters", (is) => {

  is.deepEqual
    ( parseParametricValue("stuff + 5").parameterNames
    , ["stuff"]
    , "in simple mathematical expressions"
    );

  is.deepEqual
    ( parseParametricValue("true || false").parameterNames
    , []
    , "returning nothing when there are none"
    );

  is.deepEqual
    ( parseParametricValue('"abc" + d').parameterNames
    , ["d"]
    , "next to double-quoted strings"
    );

  is.deepEqual
    ( parseParametricValue("4 + 'single quoted string' + variable").parameterNames
    , ["variable"]
    , "next to single-quoted strings"
    );

  is.deepEqual
    ( parseParametricValue("ten ? 5 + five : zero").parameterNames
    , ["ten", "five", "zero"]
    , "in a ternary expression"
    );

  is.end();
  });
