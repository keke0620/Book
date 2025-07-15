import React, { useState } from "react";
import styled from 'styled-components';

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  @media(max-width:480px){
  display: grid;
  grid-template-columns: 0.3fr;
    padding: 1rem;
  }
`;

const BookCard = styled.div`
  background: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Title = styled.h3`
color: black;
`;
const Trending = styled.h2`
color: #080800ff;
text-align:center;
 @media(max-width:480px){
 color: #080800ff;
 text-align: center;
  }
`
const BookCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
`;
const PriceTag = styled.p`
color: black;`

const Rating = styled.div`
  color: #fbbf24;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const BookList=({setCart, cart})=>{
     const books = [
    { id: 1, title: 'court of mist and fury',image: 'https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_31.zip&file=0014315089-L.jpg', price: '$10',Rating: 3.5 },
    { id: 2, title: 'grumpy darling',image: 'https://covers.openlibrary.org/b/id/15093598-L.jpg', price: '$12', Rating: 4.7},
    { id: 3, title: 'the wicked King',image: 'https://ia600505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_39.zip&file=0014398104-L.jpg', price: '$9', Rating: 4.7},
    { id: 4, title: 'It ends with us',image: 'https://covers.openlibrary.org/b/id/15069202-L.jpg', price: '$9',Rating: 4 },
    { id: 5, title: 'The alchemist',image: 'https://covers.openlibrary.org/b/id/15095844-L.jpg', price: '$9',Rating: 3 },
    { id: 6, title: 'twisted love',image: 'https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_88.zip&file=0013886065-L.jpg', price: '$9',Rating: 4  },
    { id: 7, title: 'powerless',image: 'https://covers.openlibrary.org/b/id/14839219-L.jpg', price: '$9',Rating: 3 },
    { id: 8, title: 'can we be strangers again',image: 'https://covers.openlibrary.org/b/id/14873833-L.jpg', price: '$9',Rating: 3.5  },
    { id: 9, title: 'it starts with us',image: 'https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014656586-L.jpg', price: '$9', Rating: 4},
     {id: 10, title: 'Harry potter and the globet of fire',image: 'https://covers.openlibrary.org/b/id/15096178-L.jpg', price: '$9',Rating: 4.7 }
  ];

  const [orders, setOrders] = useState([]);
  

  const handleOrders = (book)=>{
    setOrders([...orders, book]);
    alert(`ordered: ${book.title}`);
  }
  const handleAddToCart =(book)=>{
  setCart([...cart,book]);
  alert(`${book.title} added to cart.`);
  }
  return(
    <div>
    <Trending>Trending</Trending>
    <BookGrid>
      {books.map((book) => (
        <BookCard key={`${book.id}-${book.title}`}>
            <BookCardImage src={book.image} alt={book.title} />
          <Title>{book.title}</Title>
          <PriceTag>{book.price}</PriceTag>
          <Rating>{'★'.repeat(book.Rating)}{'☆'.repeat(5 - book.rating)}</Rating>
          <Button onClick={() => handleOrders(book)}>Order</Button>
          <Button onClick={() => handleAddToCart(book)}>Add to Cart</Button>
        </BookCard>
      ))}
    </BookGrid>
    </div>
  )
}
export default BookList;