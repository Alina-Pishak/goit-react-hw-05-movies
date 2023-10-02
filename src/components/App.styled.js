import styled from 'styled-components';
import { NavLink as BaseNavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 0 20px;
`

export const NavLink = styled(BaseNavLink)`
  color: #fff;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
     color: #c40208;
  }
  &.active{
  color: #c40208;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`