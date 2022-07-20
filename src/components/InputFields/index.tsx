import TextField, { TextFieldProps } from "@mui/material/TextField";

const Styles = {
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
};

const InputField: React.FC<TextFieldProps> = (props) => {
  const { value, fullWidth, placeholder, name, variant, size, onChange } =
    props;

  return (
    <TextField
      sx={Styles}
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      onChange={onChange}
      {...props}
    >
      {props.children}
    </TextField>
  );
};

InputField.defaultProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined",
};

export default InputField;
