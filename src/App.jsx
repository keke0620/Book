import { ThemeProvider } from 'styled-components'
import './App.css'
import NavBar from './components/NavBar'
import Carosul from './components/Carosul'
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import LoginPage from './components/Login'
import CartPage from './components/Cart'
import TrendingBooks from './components/TrendingBooks'

const theme = {
  colors:{
    primary: '#1e3a8a',
    secondary: ' #330014',
    background: '#f7e6f4',
  }
}
function App() {
  const [sildes, setSildes ] = useState([]);
  const [showLogin,setShowLogin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [loggedInUser,setLoggedInUser] = useState(null);
  const [ cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showTrendingBooks, setShowTrendingBooks] = useState(false);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("sessionUser"));
    if(user) setLoggedInUser(user);
  },[]);

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('sessionUser');
    setLoggedInUser(null);
  };

  useEffect(()=>{
    fetch('/books.json')
    .then((res)=>res.json())
    .then((data)=>setSildes(data.sildes))
    .catch((err)=>console.error('failed to fetch data',err));
  },[])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
<NavBar onLoginClick={()=>setShowLogin(!showLogin)}
        onCartClick={()=>setShowCart(!showCart)}
        onClickTrending={()=>setShowTrendingBooks(!showTrendingBooks)}
        user = {loggedInUser} onLogout={handleLogout}/>
  {!loggedInUser ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : ""}
  {showLogin?(
    <LoginPage onLoginSuccess={()=> {setIsLoggedIn(true); setShowLogin(false)}}/>
  ):showCart?(
   <CartPage cart={cart} />
  ):showTrendingBooks?(
    <TrendingBooks/>
  ):(
    <>
  <Carosul data={sildes}/>
<BookList setCart={setCart} cart={cart}/>
</>)}
</ThemeProvider>
  )
}

export default App
