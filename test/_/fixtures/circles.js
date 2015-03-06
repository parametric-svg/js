export default
`<svg version="1.1"
  xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1"
  >
  <defs>
    <parametric:ref param="simple" default="6" />
    <parametric:ref param="factor" default="2" />
    <parametric:ref param="plus" default="2" />
    <parametric:ref param="fill" default="'green'" />
    </defs>
  <circle id="circle-simple"
    parametric:r="simple" r="3"
    x="0"
    />
  <circle id="circle-factor"
    parametric:r="3 * factor" r="3"
    x="10"
    />
  <circle id="circle-factor-plus"
    parametric:r="2 * factor + plus" r="3"
    x="20"
    />
  <circle id="circle-factor-plus-fill"
    parametric:r="2 * factor + plus" r="3"
    parametric:fill="fill"
    x="20"
    />
  </svg>
`;
