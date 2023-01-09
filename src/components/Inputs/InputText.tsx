/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";

import * as S from "./styles";

interface IInputBase {
  control: Control<any>;
  id: string;
  label: string;
  name: string;
  defaultValue?: string | number;
  maxLength?: number;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  rules?: any;
  isErrorMessage?: boolean;
  onBlur?: (e: any) => void;
  customChange?: (e: any) => void;
}

export function InputBase({
  control,
  id,
  label,
  name,
  type,
  disabled,
  maxLength,
  readOnly,
  defaultValue,
  required,
  errorMessage,
  rules,
  isErrorMessage,
  onBlur,
  customChange,
}: IInputBase) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <S.InputBase
            id={id}
            label={label}
            variant="outlined"
            value={value || ""}
            name={name}
            disabled={disabled}
            onChange={(e) => {
              if (customChange?.name) customChange(e);
              onChange(e);
            }}
            inputProps={{
              maxLength: Number(maxLength) || 200,
              readOnly: !!readOnly,
            }}
            type={type || "text"}
            fullWidth
            size="small"
            error={!!error?.message || !!errorMessage}
            helperText={
              isErrorMessage === false
                ? ""
                : error?.message || errorMessage || " "
            }
            {...(onBlur?.name && { onBlur })}
          />
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
