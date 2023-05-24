import logo from './logo.svg';
import './App.css';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
