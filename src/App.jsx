import { ThemeProvider } from 'styled-components'
import './App.css'
import NavBar from './components/NavBar'
import Carosul from './components/Carosul'
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'

const theme = {
  colors:{
    primary: '#1e3a8a',
    secondary: '#f7eb7e',
    background: '#f7e6f4',
  }
}
function App() {
  const [sildes, setSildes ] = useState([]);

  useEffect(()=>{
    fetch('/books.json')
    .then((res)=>res.json())
    .then((data)=>setSildes(data.sildes))
    .catch((err)=>console.error('failed to fetch data',err));
  },[])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
<NavBar/>
<Carosul data={sildes}/>
<BookList/>
</ThemeProvider>
  )
}

export default App
