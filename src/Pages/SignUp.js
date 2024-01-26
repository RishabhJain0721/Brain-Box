import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (values.name === "" || values.email === "" || values.password === "") {
      return;
    }
    setErrorMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      console.log("New user created with credentials : ", user);

      const studentData = {
        name: values.name,
        email: values.email,
        subjects: [],
      };

      // Use the user's UID as the document ID in Firestore
      const docRef = doc(db, "students", user.uid);

      await setDoc(docRef, studentData);
      console.log("Document written with ID: ", user.uid);

      navigate("/dashboard");
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMsg("Error creating user");
    }
  };

  return (
    <div className="p-6 bg-[#0480AE] text-white flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="w-[500px] h-[500px] bg-[#055B7A] p-6 rounded shadow">
          <h1 className="text-5xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-500 text-white rounded px-3 py-2 focus:outline-0"
                value={values.name}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-500 text-white rounded px-3 py-2 focus:outline-0"
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
                className="w-full bg-gray-500 text-white rounded px-3 py-2 focus:outline-0"
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
            <div className="flex justify-center items-center text-2xl my-2 mt-10 mb-6">
              <span className="text-gray-400">Already have an account?</span>
              &nbsp;&nbsp;
              <span
                className="text-sky-400 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
            {errorMsg && <p className="text-red-500 mt-2 mb-2 text-sm flex justify-center">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
