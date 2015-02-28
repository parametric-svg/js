import domify from "domify";

import _test from "./_/test";
let test = _test("utils");

import getParameters from "../source/utils/get-parameters";

import svgString from "./_/fixtures/parameters";


test("getParameters works", (is) => {
  let parameters = getParameters(domify(svgString));
  console.log(JSON.stringify(parameters));

  is.equal
    ( parameters.native
    , "works"
    , "with `<ref>`s from the native SVG namespace"
    );

  is.equal
    ( parameters.parametric
    , "works as well"
    , "with `<ref>`s from the parametric namespace"
    );

  is.equal
    ( parameters.overridden
    , "yup"
    , "overriding native `<ref>`s with `<parametric:ref>`s"
    );

  is.end();

/*
  is.skip
    ( "all is well"</ref>
    , "inline"
    );

  is.skip
    ( default="'failure'" />
    , "last-wins"
    );
  is.skip
    ( default="'victory'" />
    , "last-wins"
    );

  is.skip
    ( default="'won'">"lost"</parametric:ref>
    , "default-wins"
    );

  is.skip
    ( default="9" />
    , "number-nine"
    );
  is.skip
    ( default="true" />
    , "boolean-true"
    );
  is.skip
    ( default="'alright'" />
    , "string-alright" default="'alright'" />
    );
  is.skip
    (  default='"Double quoted"' />
    , "string-double-quoted"
    );

  is.skip
    ( default="=" />
    , "invalid-fails"
    );
  is.skip
    ( default="[]" />
    , "array-fails"
    );
  is.skip
    ( default="{}" />
    , "object-fails"
    );
  is.skip
    ( default="null" />
    , "null-fails"
    );
*/
  });
