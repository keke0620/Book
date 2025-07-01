import React from "react";
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const NavContainer = styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  flex-wrap: wrap;
`;
const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;
const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #424026;
  }
`;
const PageTitle = styled.h1`
 color: #424026;
`
const NavBar=()=>{
 return(
    <Header>
    <NavContainer><PageTitle>BookWorms</PageTitle>
        <Menu>
            <MenuItem>E-Books</MenuItem>
            <MenuItem>order</MenuItem>
            <MenuItem>login</MenuItem>
        </Menu>
    </NavContainer>
    </Header>

 )
}
export default NavBar;