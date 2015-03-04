import _test from "../_/test";
let test = _test("utils/validateParameter");

import validateParameter from "../../source/utils/validate-parameter";


test("Accepts righteous types", (is) => {

  is.equal
    ( validateParameter("string").value
    , "string"
    , "strings"
    );

  is.equal
    ( validateParameter(6.5).value
    , 6.5
    , "numbers"
    );

  is.equal
    ( validateParameter(6.5).value
    , 6.5
    , "numbers"
    );

  is.equal
    ( validateParameter(Infinity).value
    , Infinity
    , "Infinity"
    );

  is.equal
    ( validateParameter("string").value
    , "string"
    , "strings"
    );

  is.end();
  });


test("Errors upon filthy types", (is) => {

  is.ok
    ( validateParameter(["anything"]).error
    , "arrays"
    );

  is.ok
    ( validateParameter({any: "object"}).error
    , "objects"
    );

  is.ok
    ( validateParameter(null).error
    , "null"
    );

  is.ok
    ( validateParameter(NaN).error
    , "NaN"
    );

  is.end();
  });
