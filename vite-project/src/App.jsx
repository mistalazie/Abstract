import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Help from './Pages/Help';
import Link from './Pages/Link';
import Live from './Pages/Live';
import Signin from './Pages/Signin';
import Move from './Pages/Move';
import Note from './Pages/Note';
import Packs from './Pages/Packs';
import Push from './Pages/Push';
import Register from './Pages/Register';
import Shop from './Pages/Shop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Help" element={<Help />} />
        <Route path="Link" element={<Link />} />
        <Route path="Live" element={<Live />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Move" element={<Move />} />
        <Route path="Note" element={<Note />} />
        <Route path="Packs" element={<Packs />} />
        <Route path="Push" element={<Push />} />
        <Route path="Register" element={<Register />} />
        <Route path="Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
