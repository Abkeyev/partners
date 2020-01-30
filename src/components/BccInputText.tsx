import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      lineHeight: "48px",
      height: "48px",
      border: "1px solid #E8E8E8",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#FFFFFF",
      boxSizing: "border-box",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff",
        border: "2px solid #1F7042"
      },
      "& label.Mui-focused": {
        color: "green"
      },
      '& > div': {
        padding: '0 30px 0 10px'
      },
    },
    focused: {}
  })
);

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "-6px",
      marginBottom: "1px"
    }
  })
);

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      isNumericString
    />
  );
};

const BccInputText = (
  props: TextFieldProps & { isNumeric?: boolean; maxLength?: number }
) => {
  const classes = useStyles({});
  const classes2 = useStyles2({});

  const { isNumeric, maxLength } = props;

  return (
    <TextField
      style={{ height: "56px" }}
      inputProps={
        maxLength
          ? {
              maxLength,
              style: { paddingTop: "20px" }
            }
          : { style: { paddingTop: "20px " } }
      }
      InputLabelProps={{ classes: classes2 } as Partial<InputLabelProps>}
      InputProps={
        isNumeric
          ? ({
              classes,
              disableUnderline: true,
              inputComponent: NumberFormatCustom as any
            } as Partial<OutlinedInputProps>)
          : ({
              classes,
              disableUnderline: true
            } as Partial<OutlinedInputProps>)
      }
      {...props}
    />
  );
};

export default BccInputText;
