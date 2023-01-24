import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem(process.env.REACT_APP_AUTH);
    if (getToken !== null) navigate("/", { replace: true });
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
