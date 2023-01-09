import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonPrimary = styled((props) => (
  <Button variant={props.variant || "contained"} {...props}>
    {props.children}
  </Button>
))`
  width: min-content;
  white-space: nowrap;

  @media screen {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ButtonSecondary = styled((props) => (
  <Button color="secondary" variant={props.variant || "outlined"} {...props}>
    {props.children}
  </Button>
))`
  white-space: nowrap;

  @media screen {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
