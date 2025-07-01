import React from "react";
import styled from 'styled-components';
const CarouselContainer = styled.div`
  width: 200%;
  overflow: hidden;
  margin: 6rem 0 1rem; /* Adjust for fixed navbar */
`;
const CarouselInner = styled.div`
  display: flex;
  animation: scroll 10s linear infinite;

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const BookImage = styled.img`
  width: 200px;
  height: 300px;
  margin: 0 1rem;
  object-fit: cover;
`;
const Carosul=({data})=>{
console.log(data);
return(
    <CarouselContainer>
        <CarouselInner>
        {data.map((item, index) => (
          <BookImage key={index} src={item.src} alt={item.alt} />
        ))}
        </CarouselInner>
    </CarouselContainer>
)
}
export default Carosul;


