import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const LogIn = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (values.email === "" || values.password === "") {
      setErrorMsg("Please fill all the fields");
      return;
    }

    setErrorMsg("");

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(error.message);
        console.log(errorMsg);
        console.log(errorCode);
      });
  };

  return (
    <div className="p-6 bg-gray-900 text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-80 bg-gray-800 p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-0"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-0"
                value={values.password}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="flex justify-center items-center text-xs my-2">
              <span className="text-gray-400">Don't have an account?</span>&nbsp;&nbsp;
              <span
                className="text-sky-400 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
