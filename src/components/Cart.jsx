import React from "react";
import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
`;
const CartContainer = styled.div`
  padding: 6rem 2rem 2rem;
`;

const Title = styled.h3`
color: black;
`;

const Image = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartPage = ({cart})=>{
    return(
        <CartContainer>
            <Title>your Cart</Title>
            {cart.length === 0 ? (
                <p>your cart is empty</p>
            ):(
                cart.map((book, index)=>(
                <CartItem key={index}>
                     <Image src={book.image} alt={book.title} />
                     <Info>
              <Title>{book.title}</Title>
              <Title>{book.price}</Title>
            </Info>
                </CartItem>
                ))
            )}
        </CartContainer>
    )
}
export default CartPage