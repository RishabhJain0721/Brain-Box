import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { NewSubjectContext } from "../Context/NewSubjectContext";
import { getAuth,signOut } from "firebase/auth";
import SubjectItem from "./SubjectItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SubjectNav = ({ student }) => {
  const navigate = useNavigate();
  // const { currentUser, dispatch } = useContext(AuthContext);
  const { newSubject } = useContext(NewSubjectContext);
  const [updatedSubjectsList, setUpdatedSubjectsList] = useState(
    student.subjects
  );

  // const [isMobile, setIsMobile] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // useEffect(()=>{
  //     var screenWidth = window.innerWidth;
  //     screenWidth > 768 ? setIsMobile(false) : setIsMobile(true)
  // }, [window])


  const handleLogout = async () => {
    try {
      // console.log(currentUser.auth)
      const auth = getAuth();
      await signOut(auth);
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
    <div className={`md:w-4/7 h-max max-sm:absolute max-sm:top-0 max-sm:h-screen max-sm:w-[90%] duration-300 ${isNavExpanded ? "left-0" : "-left-full"}`}>
      <div className="bg-gray-800 text-white p-4 rounded-md mb-4 h-full">
        <div className=" fixed top-4 left-4 text-2xl z-30 lg:hidden sm:block"
          onClick={()=> setIsNavExpanded(!isNavExpanded)}>
          <FontAwesomeIcon icon={isNavExpanded ? faArrowLeft : faBars} />
        </div>
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
