import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addmission from './components/Addmission'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Delete from './components/Delete'
import View from './components/Views'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Navbar/>
      <Routes>

        <Route path ="/" element={<Navbar />}/>
        <Route path ="/add" element={<Addmission />}/>
        <Route path ="/search" element={<Search />}/>
        <Route path ="/delete" element={<Delete />}/>
        <Route path ="/view" element={<View />}/>

      </Routes> 
      </BrowserRouter>

    </>
  )
}

export default App
