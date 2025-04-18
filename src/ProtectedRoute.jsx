// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // <-- энэ таны auth context гэж үзэж байна

const ProtectedRoute = ({ children, requiresAuth = true }) => {
  const { isLoggedIn } = useContext(AuthContext); // <-- ЗӨВ context ашиглана

  if (requiresAuth && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!requiresAuth && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
