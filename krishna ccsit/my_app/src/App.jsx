import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import StateaBasics from './components/StateaBasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1>welcome react</h1>
      <Navbar />
<Pokemon/>
      
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />}/>      
        <Route path='/S' element={<StateaBasics />} />
        <Route path='/C' element={<Counter />} />
        <Route path='/N' element={<Name />} />
        <Route path='/A' element={<Api />} />
        <Route path='/P' element={<Pokemon/>} />
      </Routes >
    </>
  )
}

export default App
