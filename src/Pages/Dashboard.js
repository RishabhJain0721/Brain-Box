import React, { useState, useEffect, useContext } from "react";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext";

import SubjectNav from "../Components/SubjectNav";
import ChapterList from "../Components/ChapterList";

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const userUid = currentUser.uid;

    if (userUid) {
      async function fetchStudent() {
        const studentDocRef = doc(db, "students", userUid);
        try {
          const studentDocSnap = await getDoc(studentDocRef);
          if (studentDocSnap.exists()) {
            setStudent(studentDocSnap.data());
          } else {
            setError("User document not found");
          }
          setLoading(false);
        } catch (error) {
          setError("Error fetching student data");
          setLoading(false);
        }
      }

      fetchStudent();
    } else {
      setLoading(false);
    }
  }, [currentUser.uid]);

  return (
    <div className="p-6 bg-blue-400 text-black min-h-screen">
      <h1 className="text-8xl max-sm:text-4xl text-center font-bold text-red-600 mb-4 w-full">
        Brain Box
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex-container">
          <SubjectNav student={student} />

          <div className="flex-grow">
            <ChapterList student={student} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
