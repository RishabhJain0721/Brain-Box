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
    // Get the current user's uid from Firebase Authentication
    const userUid = currentUser.uid;

    if (userUid) {
      // Fetch the user's document based on their uid
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
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-8xl max-sm:text-4xl text-center font-bold text-purple-600 mb-4 w-full">
        Brain Box
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
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
