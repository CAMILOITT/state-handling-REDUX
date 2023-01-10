import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ProtectRoute from './components/protectRoute/ProtectRoute';
import Todo from './page/todo/Todo';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Todo />
          </ProtectRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
