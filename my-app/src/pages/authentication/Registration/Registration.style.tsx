import styled from "styled-components";
import {Paper, TextField, Typography} from "@mui/material";
import {theme} from "../../../helpers/theme";
import {Link} from "react-router-dom";

export const PaperWrapper = styled(Paper)`
  width: 400px;
  padding: 50px;
  border: 1px solid #dedede;
  margin: 50px auto;
`
export const TextFieldWrapper = styled(TextField)`
  margin-bottom: 20px !important;
`
export const TextWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 20px;
`

export const TypographyWrapper = styled(Typography)`
  color: ${theme.colors.darkBlue};
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  padding-left: 35px;
`
export const LinkWrapper = styled(Link)`
  color: ${theme.colors.darkBlue};
  font-style: oblique;
  font-size: 20px;

  &:hover {
    background-color: ${theme.colors.skyBlue};
    color: white;
    cursor: pointer;
`
export const ErrorTextWrapper = styled.div`
  font-size: 18px;
  color: ${theme.colors.red};
  font-weight: bolder;
  opacity: 0.8;
`
