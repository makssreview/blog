import styled from "styled-components";
import {Button} from "@mui/material";
import {theme} from "../../helpers/theme";

export const Wrapper = styled.div`
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid ${theme.colors.smoke};
  position: sticky;
  top: 0;
`
export const WrapperDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`
export const WrapperButtons = styled.div`
  padding-top: 10px;
`
export const ButtonStyle = styled(Button)`
  && {
    margin: 10px;
  }
`
export const LogoutButton = styled(Button)`
  background-color: ${theme.colors.darkRed};

  && {
    margin: 10px;
  }
`
export const LogoWrapper = styled.div`
  background-color: ${theme.colors.violet};
  color: white;
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
  letter-spacing: 0.15px;
  border-radius: 5px;
  padding: 0 10px;
  text-decoration: none;

  && {
    margin: 10px;
  }

  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`
