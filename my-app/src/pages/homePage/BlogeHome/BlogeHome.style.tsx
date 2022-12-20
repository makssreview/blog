import styled from "styled-components";
import {theme} from "../../../helpers/theme";

export const Container = styled.div``

export const H2 = styled.h2`
  color: ${theme.colors.darkBlue};
  font-size: 2rem;
`
export const P = styled.p`
  color: ${theme.colors.smoke};
  font-weight: 500;
`
export const PostWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  padding: 10px 30px;
  gap: 30px;
`
