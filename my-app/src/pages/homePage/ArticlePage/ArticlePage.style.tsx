import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../../helpers/theme";
import {TextField} from "@mui/material";

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${theme.colors.smoke};
  font-weight: 500;
  display: block;
  padding: 10px 20px;
  max-width: 100px;
`
export const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
export const BlogWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 95%;
  padding: 0.5rem 0;
  gap: 1rem;
`
export const DateWrapper = styled.div`
  font-size: 12px;
  color: ${theme.colors.smoke};
  font-weight: 500;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
`
export const ImgWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  max-height: 400px;
`
export const TextWrapper = styled.p`
  padding: 1rem;
  margin-top: 1.5rem;
`
export const Container = styled.div`
  max-width: 900px;
  background-color: white;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  margin: 30px auto;
  width: 90%;
  padding: 1rem 0px;
  gap: 1rem;
`
export const LineWrapper = styled.hr`
  width: 100%;
  margin: 20px auto 20px auto;
`
export const TitleWrapper = styled.div`
  font-size: 25px;
  line-height: 1.6em;
  text-align: center;
  margin-bottom: 10px;
`
export const CommetTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`
export const CommentWrapper = styled.div`
  align-items: end;
  display: flex;
  gap:10px
`
export const TextFieldWrapper =styled(TextField)`
  max-width: 70%;
`
export const OneCommentWrapper = styled.div`

`