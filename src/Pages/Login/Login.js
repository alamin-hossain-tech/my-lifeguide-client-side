import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { FcGoogle } from "react-icons/fc";
import { Button, Icon, Input } from "semantic-ui-react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        toast.success("Successfully logged in!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <TittleHeader title={"Login"}></TittleHeader>
      <section className="w-1/2 my-12 mx-auto rounded shadow-lg">
        <div className="grid grid-cols-2 ">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co/b1nFf4x/professional-programmer-working-late-dark-office.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          ></div>
          <div className="mx-auto">
            <form onSubmit={handleLogin} className="py-12 mx-auto">
              <Input
                iconPosition="left"
                placeholder="Email"
                name="email"
                size="big"
                required
              >
                <Icon name="at" />
                <input />
              </Input>
              <br />
              <br />
              <Input
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                size="big"
              >
                <Icon name="key" />
                <input />
              </Input>
              <br />
              <br />
              <p>{error}</p>

              <div className="text-center">
                <button className="btn btn-info text-white" type="submit">
                  Login
                </button>
              </div>
              <p className="my-5 text-center">
                New To This Site?{" "}
                <Link className="login-a" to="/register">
                  {" "}
                  Create an account
                </Link>
              </p>
              <div className="or-text-box">
                <p className="or-text text-center">OR</p>
              </div>
              <div className="social-login mt-5 text-center">
                <FcGoogle className="inline fa-login" size={"2em"}></FcGoogle>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;