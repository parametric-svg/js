import tape from "tape-catch";


export default (functionName) => {
  test.__proto__ = tape;
  function test (description, ...rest) {
    return tape(functionName + ":  " + description, ...rest);
    }
  return test;
  };
