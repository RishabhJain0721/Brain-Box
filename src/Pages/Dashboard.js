import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student data from Firebase Firestore
    async function fetchStudents() {
      const studentCol = collection(db, "students");
      try {
        const stus = await getDocs(studentCol);
        const studentListData = stus.docs.map((doc) => doc.data());
        setStudentList(studentListData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching student data");
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  function makeList() {
    return studentList.map((student, index) => (
      <div key={index} className="mb-6">
        <h1 className="text-2xl font-bold">{student.name}</h1>
        {Object.keys(student.subjects).map((subjectKey) => {
          const subject = student.subjects[subjectKey];
          return (
            <div key={subjectKey} className="mt-4">
              <h2 className="text-xl font-semibold">{subject.name}</h2>
              {Object.keys(subject.chapters).map((chapterKey) => {
                const chapter = subject.chapters[chapterKey];
                return (
                  <div key={chapterKey} className="mt-2">
                    <h3 className="bg-slate-600 text-white px-2 py-1 rounded">{chapter.name}</h3>
                    <div className="mt-2">
                      <h4 className="font-semibold">Notes:</h4>
                      <ul className="list-disc list-inside">
                        {chapter.notes.map((note, noteIndex) => (
                          <li key={noteIndex}>{note}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-semibold">Video Links:</h4>
                      <ul className="list-disc list-inside">
                        {chapter.vid.map((videoLink, videoIndex) => (
                          <li key={videoIndex}>
                            <a href={videoLink} className="text-blue-600 hover:underline">{videoLink}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    ));
  }

  return (
    <div className="p-6">
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : makeList()}
    </div>
  );
};

export default Dashboard;
