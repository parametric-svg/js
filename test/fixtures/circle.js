export default `
<svg xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1">
  <defs>
    <parametric:ref param="radius" default="6" />
    <parametric:ref param="factor" default="2" />
    <parametric:ref param="extra" default="2" />
  </defs>
  <circle id="circle-radius"
    parametric:r="radius" r="3"
    />
  <circle id="circle-factor"
    parametric:r="3 * factor" r="3"
    />
  <circle id="circle-factor-plus"
    parametric:r="2 * factor + extra" r="3"
    />
</svg>
`;
