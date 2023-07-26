// SubjectNav.js

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import SubjectItem from "./SubjectItem";

const SubjectNav = ({ studentList }) => {
  const navigate = useNavigate();
  const { currentUser, dispatch } = useContext(AuthContext);
  const [updatedSubjectsList, setUpdatedSubjectsList] = useState(studentList[0].subjects); 

  const handleLogout = async () => {
    try {
      await signOut(currentUser.auth);
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (error) {
      console.error("Error while logging out:", error);
    }
  };

  const handleAddSubject = (newSubject) => {
    const updatedList = [...updatedSubjectsList, {name: newSubject, chapters: []}]
    setUpdatedSubjectsList(updatedList);
  };

  return (
    <div className="md:w-4/7">
      <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2 text-center">Subjects</h2>
        <ul>
          {studentList.map((student, index) => {
            return (
              <SubjectItem
                key={index}
                subjects={updatedSubjectsList}
                onAddSubject={handleAddSubject}
              />
            );
          })}
        </ul>
        <div className="flex flex-col items-center mt-6">
          <span className="font-semibold mb-1 mt-7">{studentList[0].name}</span>
          <button
            className="block bg-red-600 text-white px-2 py-1 rounded-md mt-1 text-sm"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectNav;
