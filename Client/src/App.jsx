import ChatRoom from './components/ChatRoom';
import HomePage from './components/HomePage';
import Register from './components/Register';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<ChatRoom />} />
      </Routes>
    </>
  );
}

export default App;
