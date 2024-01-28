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
    } 
    else {
      setLoading(false);
    }
  }, [currentUser.uid]);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen">
      <h1 className="text-4xl md:text-8xl text-center font-bold mb-4">
        Brain Box
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-4">
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
