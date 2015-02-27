import tape from "tape-catch";

function test (title, ...rest) {
  return tape("parametricSVG:  " + title, ...rest);
  }


test("Works with an SVG document root", (is) => {
  is.end();
  });

test("Works with an SVG element", (is) => {
  is.end();
  });

test("Works with a VirtualTree", (is) => {
  is.end();
  });

test("Changes nothing when no attribute is parametric", (is) => {
  is.end();
  });

test("Creates a new attribute", (is) => {
  is.end();
  });

test("Updates an existing attribute", (is) => {
  is.end();
  });

test("Changes multiple attributes at once", (is) => {
  is.end();
  });
