import { useState } from 'react'
import './App.css'
import Button from './Button/Button.jsx'
import Body from './Body/Body.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Body/>
    <Button/>
    <Footer/>
    </>
  )
}

export default App