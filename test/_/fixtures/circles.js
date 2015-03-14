import {SIMPLE, FACTOR, PLUS, FILL, OK_FILL, PERCENT, INITIAL_R, INTERVAL} from "./circles/data";
import {PARAMETRIC_NAMESPACE} from "../../../source/settings";


export default
`<svg version="1.1"
  xmlns:parametric="${PARAMETRIC_NAMESPACE}"
  >
  <defs>
    <parametric:ref param="simple" default="${SIMPLE}" />
    <parametric:ref param="factor" default="${FACTOR}" />
    <parametric:ref param="plus" default="${PLUS}" />
    <parametric:ref param="fill" default="'${FILL}'" />
    <parametric:ref param="okFill" default="'${OK_FILL}'" />
    <parametric:ref param="percent" default="${PERCENT}" />
    <parametric:ref param="ok" default="true" />
    </defs>
  <circle id="circle-simple"
    parametric:r="simple" r="${INITIAL_R}"
    cx="${1 * INTERVAL}" cy="50"
    />
  <circle id="circle-factor"
    parametric:r="${INITIAL_R} * factor" r="${INITIAL_R}"
    cx="${2 * INTERVAL}" cy="50"
    />
  <circle id="circle-factor-plus"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    cx="${3 * INTERVAL}" cy="50"
    />
  <circle id="circle-factor-plus-fill"
    parametric:r="${INITIAL_R} * factor + plus" r="${INITIAL_R}"
    parametric:fill="fill"
    parametric:style="&^invalid" style="stroke:#000"
    cx="${4 * INTERVAL}" cy="50"
    />
  <circle id="circle-fill"
    r="${INITIAL_R}"
    parametric:fill="fill"
    cx="${5 * INTERVAL}" cy="50"
    />
  <circle id="circle-ternary-fill"
    r="${INITIAL_R}"
    parametric:fill="ok ? okFill : fill"
    cx="${6 * INTERVAL}" cy="50"
    />
  <circle id="circle-percent"
    parametric:r="percent + '%'" r="${INITIAL_R}"
    cx="${7 * INTERVAL}" cy="50"
    />
  </svg>
`;
