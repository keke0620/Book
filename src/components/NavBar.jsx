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
  // background: ${({ theme }) => theme.colors.secondary};
  background:  #330014;
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
  color: #ffffff;
  font-family: Times New Roman;
  font-size: 20px;
  font-weight: Bold;
  font-family:"Garamond";
  &:hover {
    color: yellow;
  }
`;
const PageTitle = styled.h1`
 color: #ffffff;
 font-family: "Lucida Console";
 font-style: italic;
 font-size: 30px;
`
const NavBar=({onLoginClick, onCartClick, onClickTrending, user, onLogout})=>{
 return(
    <Header>
    <NavContainer><PageTitle>BookWorms</PageTitle>
        <Menu>
            <MenuItem onClick={onClickTrending}>E-Books</MenuItem>
            <MenuItem>Order</MenuItem>
            <MenuItem onClick={onCartClick}>Cart</MenuItem>
            <MenuItem onClick={onLoginClick}>Login</MenuItem>
             {user ? (
          <>
            <MenuItem>Hi, {user.username}</MenuItem>
            <MenuItem style={{ cursor: 'pointer' }} onClick={onLogout}>Logout</MenuItem>
          </>
        ):""}
        </Menu>
    </NavContainer>
    </Header>

 )
}
export default NavBar;