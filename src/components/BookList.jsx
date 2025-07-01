import React, { useState } from "react";
import styled from 'styled-components';

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const BookCard = styled.div`
 background: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  text-align: center;
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
`
const Trending = styled.h2`
color: #424026;`
const BookCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
`;
const PriceTag = styled.p`
color: black;`

const BookList=()=>{
     const books = [
    { id: 1, title: 'court of mist and fury',image: 'https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_31.zip&file=0014315089-L.jpg', price: '$10' },
    { id: 2, title: 'grumpy darling',image: 'https://covers.openlibrary.org/b/id/15093598-L.jpg', price: '$12' },
    { id: 3, title: 'the wicked King',image: 'https://ia600505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_39.zip&file=0014398104-L.jpg', price: '$9' },
    { id: 4, title: 'It ends with us',image: 'https://covers.openlibrary.org/b/id/15069202-L.jpg', price: '$9' },
    { id: 5, title: 'The alchemist',image: 'https://covers.openlibrary.org/b/id/15095844-L.jpg', price: '$9' },
    { id: 6, title: 'twisted love',image: 'https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_88.zip&file=0013886065-L.jpg', price: '$9' },
    { id: 6, title: 'powerless',image: 'https://covers.openlibrary.org/b/id/14839219-L.jpg', price: '$9' },
    { id: 6, title: 'can we be strangers again',image: 'https://covers.openlibrary.org/b/id/14873833-L.jpg', price: '$9' },
    { id: 6, title: 'it starts with us',image: 'https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014656586-L.jpg', price: '$9' },
     {id: 6, title: 'Harry potter and the globet of fire',image: 'https://covers.openlibrary.org/b/id/15096178-L.jpg', price: '$9' }
  ];

  const [orders, setOrders] = useState([]);

  const handleOrders = (book)=>{
    setOrders([...orders, book]);
    alert(`ordered: ${book.title}`);
  }
  return(
    <div>
        <Trending>Trending</Trending>
    <BookGrid>
      {books.map((book) => (
        <BookCard key={book.id}>
            <BookCardImage src={book.image} alt={book.title} />
          <Title>{book.title}</Title>
          <PriceTag>{book.price}</PriceTag>
          <Button onClick={() => handleOrders(book)}>Order</Button>
        </BookCard>
      ))}
    </BookGrid>
    </div>
  )
}
export default BookList;