import React, { Suspense, useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";

const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const BookImage = styled.img`
  height: 200px;
  object-fit: cover;
   border-radius: 6px;
  margin-bottom: 1rem;
`;
const Button = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
`;
const LoadingContainer = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  font-size: 1.25rem;
  color: #555;
`;
const Caption = styled.h3`
color:black;
`;
const AuthorD = styled.p`
color:black;
`;

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {hasError:false };
  }
  static getDerivedStateFromError(){
    return {hasError: true};
  }
  componentDidCatch(error,info){
    console.error("error caught in the boundary",error,info);
  }
  render(){
    if(this.state.hasError){
      return <LoadingContainer>Something went wrong while loading trending books</LoadingContainer>
    }
    return this.props.children;
  }
}

function TrendingBooksContent(){
    const [tbook, setTbook] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        axios.get('https://openlibrary.org/trending/now.json')
        .then((res)=> { setTbook(res.data.works || []);
            console.log('API response', res.data);
            setLoading(false);
        }).catch((err)=>{ console.log('falied to fetch books',err);
        setTbook([]);
        setLoading(false);
        });
    },[]);
console.log('Book entry:', tbook);

  if(loading){
  return <LoadingContainer>📚 Loading trending books...</LoadingContainer>
  }
  // if(!tbook || tbook.length === 0) return <LoadingContainer>No trending books found.</LoadingContainer>;

    return(
        <Grid>
      {tbook.map((book) => {
        const edition = book.editions?.docs?.[0];
        const coverId = edition?.cover_i || book.cover_i;
        const bookLink = edition?.key || book.key;
        const title = book.title || edition?.title || edition?.subtitle || 'Untitled';
        const authors = book.author_name?.join(', ') || 'Unknown Author';
        const publishYear = book.first_publish_year || edition?.first_publish_year || 'N/A';
        return (
          <BookCard key={bookLink}>
            <BookImage
              src={coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
            : 'https://via.placeholder.com/200x300?text=No+Cover'}
              alt={title}
            />
            <Caption>{title}</Caption>
            <AuthorD>{authors}</AuthorD>
          <AuthorD>First Pub.: {publishYear}</AuthorD>
             <Button
            href={`https://openlibrary.org${bookLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview Book
          </Button>
          </BookCard>
        );
      })}
    </Grid>
    )
}

const TrendingBooks = () =>{
return(
  <ErrorBoundary>
    <Suspense fallback = {<LoadingContainer>Loading component...</LoadingContainer>}>
    <TrendingBooksContent></TrendingBooksContent>
    </Suspense>
  </ErrorBoundary>
)
}
export default TrendingBooks;
