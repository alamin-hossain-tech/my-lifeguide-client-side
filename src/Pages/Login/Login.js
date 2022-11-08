import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  return (
    <div>
      <TittleHeader title={"Login"}></TittleHeader>
    </div>
  );
};

export default Login;
