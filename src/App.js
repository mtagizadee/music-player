import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Song from './pages/Song';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/songs/:id' element={<Song />} />
        <Route path='*' element={<Navigate to='error' />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;