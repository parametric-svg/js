import toDOM from "domify";

import _test from "../_/test";
let test = _test("parametric-svg behavior");

import {SIMPLE, FACTOR, PLUS, FILL, OK_FILL, PERCENT, INITIAL_R} from "../_/fixtures/circles/data";
import circlesSource from "../_/fixtures/circles";
import invalidSource from "../_/fixtures/invalid";
import staticSource from "../_/fixtures/static";

import parametricSVG from "../../source/parametric-svg";

let circlesDOM = toDOM(circlesSource);
let invalidDOM = toDOM(invalidSource);
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


test("Removes an attribute upon null", is => {
  let circle = circlesDOM.getElementById("circle-fill");
  parametricSVG(circle, {fill: null});
  is.equal
    ( circle.getAttribute("fill")
    , null
    , "leaving no paws behind"
    );
  is.end();
  });


test("Handles edge cases", is => {
  let originalWarn = console.warn;
  let circle;

  is.plan(7);

  let warningCount = 0;
  console.warn = () => warningCount += 1;
  parametricSVG(invalidDOM);
  is.equal
    ( warningCount
    , 6
    , "warning once for every invalid `<ref>`, and once for every queer parametric attribute"
    );

  console.warn = () => is.pass
    ( "warning about a non-declared parameter reference"
    );
  parametricSVG((circle = invalidDOM.getElementById("circle-undefined")), {});
  is.equal
    ( circle.getAttribute("r")
    , "1"
    , "...leaving the parameter intact"
    );

  console.warn = () => is.pass
    ( "warning about an expression with a non-declared parameter reference"
    );
  parametricSVG((circle = invalidDOM.getElementById("circle-undefined-operation")), {});
  is.equal
    ( circle.getAttribute("r")
    , "2"
    , "...leaving the parameter intact"
    );

  console.warn = () => is.pass
    ( "warning when it encounters an array"
    );
  parametricSVG((circle = invalidDOM.getElementById("circle-array"))
    , {array: []}
    );
  is.equal
    ( circle.getAttribute("r")
    , "3"
    , "...leaving the parameter intact"
    );

  console.warn = originalWarn;
  is.end();
  });
