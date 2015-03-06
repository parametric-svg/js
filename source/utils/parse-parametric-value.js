import acorn from "acorn";


export default function parseParametricValue (value) {
  // Parse the value into an AST.
  let ast;
  try {ast = acorn.parse(value);}
  catch (error) {return {error};}

  // Error if the value is not exactly one expression.
  if (ast.type != "Program" || !ast.body) return {error: new SyntaxError(
    "Unknown format of parametric attribute."
    )};
  if (ast.body.length != 1) return {error: new SyntaxError(
    "A parametric attribute must be exactly one ES expression."
    )};

  // Find parameter names.
  let parameterNames = [];
  (function recurse (branch) {
    if (branch.type == "Identifier") {
      parameterNames.push(branch.name);
      return;
      }

    let twig;
    for (let key in branch) if (branch.hasOwnProperty(key)) {
      if ((twig = branch[key]) && typeof twig == "object") recurse(twig);
      }
    })(ast.body[0]);

  // Parse the `value` as a function – error if that fails.
  let func;
  try {func = Function.apply(null
    , parameterNames
      .concat("return (" + value + ");")
    );}
  catch (error) {return {error};}

  // Return the function and parameter names.
  return {parameterNames, func};
  }
