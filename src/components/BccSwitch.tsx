import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const BccSwitch = withStyles({
    switchBase: {
      color: '#27AE60',
      '&$checked': {
        color: '#27AE60',
      },
      '&$checked + $track': {
        backgroundColor: '#249052',
      },
    },
    checked: {},
    track: {
      backgroundColor: '#B9B9B9'
    },
  })(Switch);

export default BccSwitch;