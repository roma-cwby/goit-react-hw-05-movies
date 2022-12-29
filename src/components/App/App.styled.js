import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  box-shadow: 5px 0 10px 10px #00000080;
  margin-bottom: 10px;
  padding: 0 20px;

  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 150%;
  text-decoration: none;

  transition: color 200ms linear;

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: red;
  }
`;
