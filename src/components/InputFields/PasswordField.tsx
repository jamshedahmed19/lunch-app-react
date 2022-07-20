import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField: React.FC<TextFieldProps> = (props) => {
  const {
    value,
    fullWidth,
    placeholder,
    name,
    variant,
    size,
    onChange,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      placeholder={placeholder}
      name={name}
      value={value}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

PasswordField.defaultProps = {
  size: "small",
  fullWidth: true,
  variant: "outlined",
};

export default PasswordField;
