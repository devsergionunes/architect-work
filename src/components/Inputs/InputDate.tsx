/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import brLocale from "date-fns/locale/pt-BR";
import { Control, Controller } from "react-hook-form";

import { useAppSelector } from "../../store/hooks";
import * as S from "./styles";

interface IInputDate {
  control: Control<any>;
  id: string;
  label: string;
  name: string;
  defaultValue?: string | number;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  rules?: any;
  isErrorMessage?: boolean;
}

export function InputDate({
  control,
  id,
  label,
  name,
  disabled,
  readOnly,
  defaultValue,
  required,
  errorMessage,
  rules,
  isErrorMessage,
}: IInputDate) {
  const { device } = useAppSelector(({ Utils }) => Utils);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={brLocale}
          >
            {device === "mobile" ? (
              <MobileDatePicker
                label={label}
                value={value}
                disabled={disabled}
                onChange={onChange}
                inputFormat="dd/MM/yyyy"
                readOnly={readOnly}
                renderInput={(params) => (
                  <S.InputBase
                    id={id}
                    name={name}
                    label={label}
                    fullWidth
                    size="small"
                    inputProps={{
                      readOnly: !!readOnly,
                    }}
                    {...params}
                    helperText={
                      isErrorMessage === false
                        ? ""
                        : error?.message || errorMessage || " "
                    }
                    error={!!(error?.message || errorMessage)}
                  />
                )}
              />
            ) : (
              <DesktopDatePicker
                label={label}
                value={value}
                disabled={disabled}
                onChange={onChange}
                inputFormat="dd/MM/yyyy"
                readOnly={readOnly}
                renderInput={(params: any) => (
                  <S.InputBase
                    id={id}
                    name={name}
                    label={label}
                    fullWidth
                    size="small"
                    inputProps={{
                      readOnly: !!readOnly,
                    }}
                    disabled={disabled}
                    {...params}
                    helperText={
                      isErrorMessage === false
                        ? ""
                        : error?.message || errorMessage || " "
                    }
                    error={!!(error?.message || errorMessage)}
                  />
                )}
              />
            )}
          </LocalizationProvider>
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
