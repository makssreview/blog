import styled from "styled-components";
import {Paper} from "@mui/material";
import {theme} from "../../helpers/theme";

export const ImageWrapper = styled.img`
  max-width: 600px;
  max-height: 600px;
`
export const TitleWrapper = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
`
export const Wrapper = styled(Paper)`
  padding: 30px 30px 20px 30px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;;
`
export const TagsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`
export const ItemWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.09);
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
`
export const CloseWrapper = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: ${theme.colors.darkGreen};
  color: ${theme.colors.whitesmoke};
  border-radius: 50%;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;
`
