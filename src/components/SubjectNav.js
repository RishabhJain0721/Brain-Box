import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { NewSubjectContext } from "../Context/NewSubjectContext";
import { signOut } from "firebase/auth";
import SubjectItem from "./SubjectItem";

const SubjectNav = ({ student }) => {
  const navigate = useNavigate();
  const { currentUser, dispatch } = useContext(AuthContext);
  const { newSubject } = useContext(NewSubjectContext);
  const [updatedSubjectsList, setUpdatedSubjectsList] = useState(
    student.subjects
  );

  const handleLogout = async () => {
    try {
      await signOut(currentUser.auth);
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (error) {
      console.error("Error while logging out:", error);
    }
  };
  
  useEffect(() => {
    if (newSubject) {
      console.log("New subject added:", newSubject);
      setUpdatedSubjectsList((prevSubjects) => [...prevSubjects, newSubject]);
    }
  }, [newSubject]);

  return (
    <div className="md:w-4/7">
      <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2 text-center">Subjects</h2>
        <ul>
          <SubjectItem subjects={updatedSubjectsList} setUpdatedSubjectsList={setUpdatedSubjectsList} />
        </ul>
        <div className="flex flex-col items-center mt-6">
          <span className="font-semibold mb-1 mt-7">{student.name}</span>
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
