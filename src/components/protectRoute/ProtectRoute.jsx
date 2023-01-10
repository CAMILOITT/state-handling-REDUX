import { Navigate } from 'react-router-dom';

export default function ProtectRoute({ children }) {
  const isLogin = sessionStorage.getItem('login');
  return isLogin ? children : <Navigate to="/login" />;
}
