import React from "react";
import { Link } from "react-router-dom";

import homeImage from "../assets/learningBro.png";

const Home = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-9xl text-center text-purple-600 mb-4">Brain Box</h1>

      <div className="flex flex-row items-center justify-center mt-4">
        <div className="flex items-center justify-center">
          <img src={homeImage} className="h-96 px-4" alt="Failed to load img" />
        </div>

        <div className="text-center mt-8 w-auto">
          <p className="text-2xl">Organize your study material like a pro.</p>
          <br />
          <p className="text-2xl">
            Save all your study material links in a defined way.
          </p>
          <div className="flex flex-row mt-8 space-x-4 justify-center">
            <Link
              to="/signup"
              className="bg-blue-500 text-white px-4 py-2 mx-6 rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 mx-6 rounded hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
