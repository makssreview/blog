import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {theme} from "../../helpers/theme";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 19px;
  box-shadow: 0px 0.5px 1px 1px rgba(230, 230, 230, 0.75);
  whileHover: { {
    scale: 1.1
  }
  };
  //transition:{{ type: "spring", stiffness: 400, damping: 10 }}
`
export const LinkWrapper = styled(Link)`
  cursor: pointer;
  height: 456px;
`

export const ItemWrapper = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
  margin-bottom: 0.5rem;
  opacity: 0.8;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`
export const NameWrapper = styled.h3`
  margin: 0.5rem 0 1rem 0;
  flex: 1;
  max-width: 100px;
`
export const TitleWrapper = styled.h3`
  font-family: 'Calibri Light';
  font-weight: bolder;
  font-size: 20px;
  max-width: 300px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding-left: 12px;
  padding-right: 12px;
`
export const TextWrapper = styled.h3`
  color: ${theme.colors.black};
  //margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 7.7em;
  line-height: 1.6em;
  padding-left: 10px;
  padding-right: 10px;
`

export const DivAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 0.5rem;

  & img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  & p {
    font-size: 0.6rem;
    color: ${theme.colors.smoke};
    font-weight: 600;
  }
`
export const ChipWrapper = styled.div`
  background: linear-gradient(to right, ${theme.colors.blue}, ${theme.colors.pink});
  font-size: 18px;
  color: white;
  padding: 0.2rem 0.7rem;
  border-radius: 10px;
  width: fit-content;
  text-transform: capitalize;
  justify-content: start;
  display: inline-flex;
  margin: 5px 5px 10px 10px;
`
export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
export const ChipsWrapper = styled.div`
  display: inline-flex;
  max-width: 410px;
  max-height: 50px;
  overflow: hidden;
`