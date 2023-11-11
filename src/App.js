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
        <Route path='/assgn5_employee_react' element={<Home />}></Route>
        <Route path='/assgn5_employee_react/form' element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
