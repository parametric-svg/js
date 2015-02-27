export default `
<svg xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1">
  <defs>
    <parametric:ref param="factor" default="2" />
  </defs>
  <circle id="circle-r-6"
    r="3"
    parametric:r="3 * factor"
    />
</svg>
`;
