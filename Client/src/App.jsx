import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import {Routes , Route } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
     
    </>
  )
}

export default App
