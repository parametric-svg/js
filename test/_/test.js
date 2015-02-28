import tape from "tape-catch";


export default (partName) => {
  let prefix = partName + ":  ";
  return function test (description, ...rest) {
    return tape(prefix + description, ...rest);
    };
  };
