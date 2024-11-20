import ChatRoom from './components/ChatRoom';
import HomePage from './components/HomePage'
import Register from './components/Register'
import Login from './components/Login'

import { Routes, Route } from 'react-router-dom';
import Socket from './utils/Socket';

function App() {
  return (
    <>
    <Socket/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<ChatRoom />} />
       <Route path='/login' element={<Login/>}/>
        
    </Routes>
    </>
  );
}

export default App;
