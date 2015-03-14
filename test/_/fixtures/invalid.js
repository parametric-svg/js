import {PARAMETRIC_NAMESPACE} from "../../../source/settings";


export default
`<svg version="1.1"
  xmlns:parametric="${PARAMETRIC_NAMESPACE}"
  >
  <defs>
    <parametric:ref param="array" default="[]" />
    <parametric:ref param="invalid" default="=!$^#" />
    </defs>
  <circle id="circle-undefined"
    parametric:r="notThere" r="1"
    />
  <circle id="circle-undefined-operation"
    parametric:r="notThere + 2" r="2"
    />
  <circle id="circle-array"
    parametric:r="array" r="3"
    />
  <circle id="circle-invalid"
    parametric:r="invalid" r="4"
    />
  </svg>
`;
