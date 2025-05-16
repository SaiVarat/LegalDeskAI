// src/routes/RedirectIfLoggedIn.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { JSX } from "react/jsx-runtime";

interface Props {
  children: JSX.Element;
}

const RedirectIfLoggedIn = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

export default RedirectIfLoggedIn;
