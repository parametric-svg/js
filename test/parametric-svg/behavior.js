import tape from "tape-catch";

function test (title, ...rest) {
  return tape("parametricSVG:  " + title, ...rest);
  }
test.__proto__ = tape;


test.skip("Replaces simple values", (is) => {
  });


test.skip("Knows maths", (is) => {
  });


test.skip("Works with strings", (is) => {
  });


test.skip("Knows logic", (is) => {
  });


test.skip("Throws on unsupported types", (is) => {
  });
