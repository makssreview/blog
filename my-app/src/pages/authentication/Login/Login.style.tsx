import styled from "styled-components";
import {Paper, TextField, Typography} from "@mui/material";
import {theme} from "../../../helpers/theme";
import {Link} from "react-router-dom";

export const PaperWrapper = styled(Paper)`
  width: 400px;
  padding: 50px;
  border: 1px solid ${theme.colors.white};
  margin: 50px auto;
`
export const TextFieldWrapper = styled(TextField)`
  margin-bottom: 20px !important;
`
export const TextWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  padding-left: 20px;
  font-size: 20px;
`

export const TypographyWrapper = styled(Typography)`
  padding-left: 30px;
`
export const LinkWrapper = styled(Link)`
  font-style: oblique;
  color: ${theme.colors.darkBlue};
  font-size: 20px;

  &:hover {
    background-color: ${theme.colors.skyBlue};
    cursor: pointer;
`
