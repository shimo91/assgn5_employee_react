import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
