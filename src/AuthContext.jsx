// context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); 

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedRole = localStorage.getItem('userRole');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
      if (storedRole) setUserRole(storedRole);
    }
  }, []);

const login = (role = "user") => {
  setIsLoggedIn(true);
  setUserRole(role);
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userRole', role);
};


  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;