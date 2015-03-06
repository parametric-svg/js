import {SIMPLE, FACTOR, PLUS, FILL, INITIAL_R} from "./circles/data";


export default
`<svg version="1.1"
  xmlns:parametric="https://github.com/parametric-svg/spec/tree/0.1"
  >
  <defs>
    <parametric:ref param="simple" default="${SIMPLE}" />
    <parametric:ref param="factor" default="${FACTOR}" />
    <parametric:ref param="plus" default="${PLUS}" />
    <parametric:ref param="fill" default="'${FILL}'" />
    </defs>
  <circle id="circle-simple"
    parametric:r="simple" r="${INITIAL_R}"
    x="0"
    />
  <circle id="circle-factor"
    parametric:r="${INITIAL_R} * factor" r="${INITIAL_R}"
    x="10"
    />
  <circle id="circle-factor-plus"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    x="20"
    />
  <circle id="circle-factor-plus-fill"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    parametric:fill="fill"
    x="20"
    />
  </svg>
`;
