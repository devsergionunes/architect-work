import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import styled, { css } from "styled-components";

type InputBaseProps = {
  isError?: boolean;
};

export const GridInput = styled(Grid)<InputBaseProps>`
  label {
    color: ${(props) => (props.isError ? "#f00" : "")};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => (props.isError ? "#f00" : "")};
  }
`;
export const InputBase = styled(TextField)<InputBaseProps>`
  ${({ theme, isError }) => css`
    outline-color: ${theme.palette.primary.main};

    .MuiFormHelperText-root {
      margin: 2px 0 0 2px;
      color: ${isError ? "#f00" : "inherit"};
    }
  `}
`;

export const InputRadios = styled(TextField)`
  ${({ theme }) => css`
    outline-color: ${theme.palette.primary.main};
  `}
`;
