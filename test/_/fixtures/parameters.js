import {PARAMETRIC_NAMESPACE} from "../../../source/settings";


export default
`<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:parametric="${PARAMETRIC_NAMESPACE}"
  >
  <defs>
    <ref param="native" default="'works'" />

    <parametric:ref param="parametric" default="'works as well'" />

    <parametric:ref param="overridden" default="'yup'" />
    <ref param="overridden" default="'nope'" />

    <ref param="inline">"all is well"</ref>

    <parametric:ref param="last-wins" default="'failure'" />
    <parametric:ref param="last-wins" default="'victory'" />

    <parametric:ref param="default-wins" default="'won'">"lost"</parametric:ref>

    <parametric:ref param="number-nine" default="9" />
    <parametric:ref param="boolean-true" default="true" />
    <parametric:ref param="string-alright" default="'alright'" />
    <parametric:ref param="string-double-quoted" default='"Double quoted"' />
    <parametric:ref param="null-alright" default="null" />

    <parametric:ref param="invalid-fails" default="=" />
    <parametric:ref param="array-fails" default="[]" />
    <parametric:ref param="object-fails" default="{}" />
    <!-- This should fail when we do the parsing right -->
    <!--parametric:ref param="expression-fails" default="1 + 2" /-->
    </defs>
  </svg>
`;
