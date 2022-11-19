import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { FcGoogle } from "react-icons/fc";
import { Icon, Input } from "semantic-ui-react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import TabTitle from "../../Utility/General";

const Login = () => {
  TabTitle("Login");
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        fetch("http://localhost:4000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", data.token));
        setError("");
        toast.success("Successfully logged in!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

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
        toast.error(
          error.message === "Firebase: Error (auth/wrong-password)."
            ? "Wrong Password"
            : "User Not Fount"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <TittleHeader title={"Login"}></TittleHeader>
      <section className="w-1/2 my-24 mx-auto rounded shadow-lg">
        <div className="grid grid-cols-2 ">
          <div
            className="flex justify-center items-center bg-bottom "
            style={{
              backgroundImage: `url("https://i.ibb.co/s1ctSBG/capnsnap-ut-YSg-MOIm5w-unsplash.jpg")`,
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
                required
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
                <FcGoogle
                  onClick={handleGoogleLogin}
                  className="inline fa-login"
                  size={"2em"}
                ></FcGoogle>
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
