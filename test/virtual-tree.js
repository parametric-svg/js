import tape from "tape-catch";

function test (title, ...rest) {
  return tape("VirtualTree:  " + title, ...rest);
  }


test("Is converted to DOM on .toDOM()", (is) => {
  is.end();
  });

test("Is converted to an XML string on .toString()", (is) => {
  is.end();
  });
