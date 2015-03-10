export default
`<svg version="1.1"
  xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1"
  >
  <defs>
    <parametric:ref param="array" default="[]" />
    <parametric:ref param="invalid" default="=!$^#" />
    </defs>
  <circle id="circle-undefined"
    parametric:r="notThere"
    />
  <circle id="circle-array"
    parametric:r="array"
    />
  <circle id="circle-invalid"
    parametric:r="invalid"
    />
  </svg>
`;