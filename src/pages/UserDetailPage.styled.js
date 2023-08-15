import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-right: 50px;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  height: 20px;
  font-size: 14px;
  padding: 0 10px;
  text-align: center;
  background-color: lightgray;
  text-decoration: none;

  &:hover {
    color: #c75124;
    border: 1px solid #c75124;
  }
`;
