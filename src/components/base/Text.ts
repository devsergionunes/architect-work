import styled, { css } from "styled-components";

type StyledProps = {
  textAlign?: string;
  margin?: string;
  size?: string;
  weight?: string;
  color?: string;
  numberOfLines?: number;
  textOverflow?: string;
  maxWidth?: string;
  width?: string;
  overflow?: string;
  padding?: string;
  lineHeight?: string;
};

export const H1 = styled.h1<StyledProps>`
  ${({
    theme,
    textAlign,
    margin,
    size,
    weight,
    color,
    textOverflow,
    numberOfLines,
    width,
  }) => css`
    width: ${width || "100%"};
    font-size: ${size || theme.typography.h1.fontSize};
    font-weight: ${weight || theme.typography.h1.fontWeightBold};
    color: ${color || theme.palette.primary.main};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    -webkit-line-clamp: ${numberOfLines || 3};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const H2 = styled.h2<StyledProps>`
  ${({
    theme,
    textAlign,
    width,
    margin,
    size,
    weight,
    color,
    textOverflow,
    numberOfLines,
  }) => css`
    width: ${width || "100%"};
    font-size: ${size || theme.typography.h2.fontSize};
    font-weight: ${weight || theme.typography.h2.fontWeightBold};
    color: ${color || theme.text.primary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    -webkit-line-clamp: ${numberOfLines || 3};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const H3 = styled.h3<StyledProps>`
  ${({
    theme,
    textAlign,
    width,
    margin,
    size,
    weight,
    color,
    textOverflow,
    numberOfLines,
  }) => css`
    width: ${width || "100%"};
    font-size: ${size || theme.typography.h3.fontSize};
    font-weight: ${weight || theme.typography.h3.fontWeightBold};
    color: ${color || theme.text.primary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    -webkit-line-clamp: ${numberOfLines || 3};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const H5 = styled.h6<StyledProps>`
  ${({
    theme,
    textAlign,
    margin,
    size,
    weight,
    color,
    textOverflow,
    numberOfLines,
    width,
  }) => css`
    width: ${width || "100%"};
    font-size: ${size || theme.typography.h5.fontSize};
    font-weight: ${weight || theme.typography.h5.fontWeightBold};
    color: ${color || theme.text.secondary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    -webkit-line-clamp: ${numberOfLines || 3};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const H6 = styled.h6<StyledProps>`
  ${({
    theme,
    textAlign,
    margin,
    size,
    weight,
    color,
    textOverflow,
    numberOfLines,
    width,
  }) => css`
    width: ${width || "100%"};
    font-size: ${size || theme.typography.h6.fontSize};
    font-weight: ${weight || theme.typography.h6.fontWeightBold};
    color: ${color || theme.text.secondary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    text-transform: none;
    -webkit-line-clamp: ${numberOfLines || 3};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const Paragraph = styled.p<StyledProps>`
  ${({
    theme,
    color,
    textAlign,
    margin,
    size,
    weight,
    textOverflow,
    numberOfLines,
    maxWidth,
    lineHeight,
    width,
  }) => css`
    width: ${width || "100%"};
    max-width: ${maxWidth || "100%"};
    font-size: ${size || theme.typography.body1.fontSize};
    font-weight: ${weight || theme.typography.body1.fontWeightMedium};
    color: ${color || theme.text.secondary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "0.25rem 0"};
    line-height: ${lineHeight || "initial"};
    text-overflow: ${textOverflow || "unset"};
    overflow: ${textOverflow ? "hidden" : "unset"};
    display: ${textOverflow ? "-webkit-box !important" : "block"};
    text-transform: none;
    -webkit-line-clamp: ${numberOfLines || 1};
    -webkit-box-orient: ${textOverflow ? "vertical" : "unset"};
  `}
`;

export const Span = styled.span<StyledProps>`
  ${({ theme, color, size, weight, textAlign, margin, width }) => css`
    width: ${width || "auto"};
    font-size: ${size || theme.typography.body2.fontSize};
    font-weight: ${weight || theme.typography.body2.fontWeightRegular};
    color: ${color || theme.text.primary};
    text-align: ${textAlign || "left"};
    margin: ${margin || "none"};
    text-transform: none;
  `}
`;
