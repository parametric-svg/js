let theHole = document.createElement("div");

export default function toDOM (string) {
  theHole.innerHTML = string;
  console.log(theHole.innerHTML);
  let result = theHole.firstChild;
  console.log(result.outerHTML);
  let child;
  while ((child = theHole.lastChild)) theHole.removeChild(child);
  return result;
  }
