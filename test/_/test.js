import tape from "tape-catch";


export default (functionName) => {
  return function test (description, ...rest) {
    return tape(functionName + ":  " + description, ...rest);
    };
  };
