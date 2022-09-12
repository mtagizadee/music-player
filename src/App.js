import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Song from './pages/Song';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/songs/:id' element={<Song />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;