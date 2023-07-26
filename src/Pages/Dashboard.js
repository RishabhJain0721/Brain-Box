import React, { useState, useEffect,useContext } from "react";
import { db, auth } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import SubjectNav from "../components/SubjectNav";
import ChapterList from "../components/ChapterList";
 
import { AuthContext } from "../Context/AuthContext";


const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    // Get the current user's uid from Firebase Authentication
    const userUid = currentUser.uid;
    console.log("user in dashboard",userUid)
    if (userUid) {
      // Fetch the user's document based on their uid
      // const a="xT3TsJHhXj6ksUYP6www";
      // const b= "1"
      async function fetchStudent() {
        const studentDocRef = doc(db, "students", userUid);
        console.log("11111111111111111",studentDocRef)
        try {
          const studentDocSnap = await getDoc(studentDocRef);
          console.log("2222222222",studentDocSnap )
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
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1
        className="text-8xl text-center font-bold text-purple-600 mb-4 w-full"
      >
        Brain Box
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <SubjectNav studentList={[student]} /> {/* Pass the student as an array */}
          <ChapterList studentList={[student]} /> {/* Pass the student as an array */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
