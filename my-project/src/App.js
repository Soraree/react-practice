import logo from './logo.svg';
import './App.css';
import Homeview from './views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>app</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Homeview />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
