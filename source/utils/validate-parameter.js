export default function validateParameter (value) {
  if (  typeof value == "number" && !isNaN(value)
     || typeof value == "boolean"
     || typeof value == "string"
     ) return {value};
  else return {error: new SyntaxError(
    "Invalid parameter value: " + value
    )};
  }
