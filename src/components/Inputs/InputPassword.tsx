/* eslint-disable @typescript-eslint/no-explicit-any */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface IInputPassword {
  control: Control<any>;
  id: string;
  label: string;
  name: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rules?: any;
  customChange?: (e: any) => void;
}

export function InputPassword({
  control,
  id,
  label,
  name,
  disabled,
  readOnly,
  required,
  rules,
  errorMessage,
  customChange,
}: IInputPassword) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel error={!!error?.message || !!errorMessage} htmlFor={id}>
              {label}
            </InputLabel>
            <OutlinedInput
              id={id}
              type={showPassword ? "text" : "password"}
              value={value || ""}
              size="small"
              onChange={(e) => {
                if (customChange?.name) customChange(e);
                onChange(e);
              }}
              readOnly={readOnly}
              required={required}
              disabled={disabled}
              error={!!error?.message || !!errorMessage}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
            <FormHelperText
              style={{ margin: "2px 0 0 2px" }}
              error={!!error?.message || !!errorMessage}
            >
              {error?.message || errorMessage || " "}
            </FormHelperText>
          </FormControl>
        );
      }}
      rules={{
        required: {
          value: !!required,
          message: `${label} é obrigatório`,
        },
        ...rules,
      }}
    />
  );
}
