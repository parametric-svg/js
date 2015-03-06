import tape from "tape-catch";


export default (functionName) => {
  function test (description, ...rest) {
    return tape(functionName + ":  " + description, ...rest);
    }
  Object.setPrototypeOf(test, tape);
  return test;
  };
