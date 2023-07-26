import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { getAuth,signOut } from "firebase/auth";
import SubjectItem from "./SubjectItem";

const SubjectNav = ({ studentList }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const auth=getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to the login page after successful logout
      navigate("/login");
    } catch (error) {
      console.error("Error while logging out:", error);
    }
  };

  return (
    <div className="md:w-4/7">
      <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2 text-center">Subjects</h2>
        <ul>
          {studentList.map((student, index) => {
            return <SubjectItem key={index} subjects={student.subjects} />;
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
