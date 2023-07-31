// ChapterList.js

import React, { useContext, useEffect, useState } from "react";
import ChapterItem from "./ChapterItem";
import { NewSubjectContext } from "../Context/NewSubjectContext";

const ChapterList = ({ student }) => {
  const { newSubject } = useContext(NewSubjectContext);
  const [updatedSubjectsList, setUpdatedSubjectsList] = useState(
    student.subjects
  );

  useEffect(() => {
    if (newSubject) {
      console.log("New subject added:", newSubject);
      setUpdatedSubjectsList((prevSubjects) => [...prevSubjects, newSubject]);
    }
  }, [newSubject]);

  return (
    <div>
      <div className="md:w-6/7">
        {/* Add some margin-bottom to create line spacing */}
        {Object.keys(updatedSubjectsList).map((subjectKey) => {
          const subject = updatedSubjectsList[subjectKey];
          return (
            <div key={subjectKey} className=" mb-10"> {/* Add margin here */}
              <ChapterItem subject={subject} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
