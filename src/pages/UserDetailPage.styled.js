import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 20px;
  padding: 0 10px;
  text-align: center;
  background-color: lightgray;
  text-decoration: none;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;
  }
`;
