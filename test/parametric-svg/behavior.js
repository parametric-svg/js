import toDOM from "domify";

import _test from "../_/test";
let test = _test("parametric-svg behavior");

import {SIMPLE, FACTOR, PLUS, FILL, OK_FILL, PERCENT, INITIAL_R} from "../_/fixtures/circles/data";
import circlesSource from "../_/fixtures/circles";
import staticSource from "../_/fixtures/static";

import parametricSVG from "../../source/parametric-svg";

let circlesDOM = toDOM(circlesSource);
let staticDOM = toDOM(staticSource);


test("Changes nothing when no attribute is parametric", is => {
  let snapshot = staticDOM.outerHTML;
  parametricSVG(staticDOM);
  is.equal
    ( staticDOM.outerHTML
    , snapshot
    , "nothin' I tell ya"
    );
  is.end();
  });


test("Replaces simple values", is => {
  let circle = circlesDOM.getElementById("circle-simple");
  parametricSVG(circle, {simple: SIMPLE});
  is.equal
    ( circle.getAttribute("r")
    , "" + SIMPLE
    , "with grace"
    );

  is.end();
  });


test("Knows maths", is => {
  let circle = circlesDOM.getElementById("circle-factor");
  parametricSVG(circle, {factor: FACTOR});
  is.equal
    ( circle.getAttribute("r")
    , "" + (INITIAL_R * FACTOR)
    , "from simple things"
    );

  let circlePlus = circlesDOM.getElementById("circle-factor-plus");
  parametricSVG(circlePlus, {factor: FACTOR, plus: PLUS});
  is.equal
    ( circlePlus.getAttribute("r")
    , "" + (INITIAL_R * FACTOR + PLUS)
    , "up until nerdy stuff"
    );

  is.end();
  });


test("Works with strings", is => {
  let circle = circlesDOM.getElementById("circle-fill");
  parametricSVG(circle, {fill: FILL});
  is.equal
    ( circle.getAttribute("fill")
    , "" + FILL
    , "it really does"
    );

  let circlePercent = circlesDOM.getElementById("circle-percent");
  parametricSVG(circlePercent, {percent: PERCENT});
  is.equal
    ( circlePercent.getAttribute("r")
    , PERCENT + "%"
    , "even when casting and concatenating"
    );

  is.end();
  });


test("Knows logic", is => {
  let circle = circlesDOM.getElementById("circle-ternary-fill");
  parametricSVG(circle, {fill: FILL, okFill: OK_FILL, ok: true});
  is.equal
    ( circle.getAttribute("fill")
    , "" + OK_FILL
    , "like a boss"
    );
  is.end();
  });
