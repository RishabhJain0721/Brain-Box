// ChapterList.js
import React from "react";
import ChapterItem from "./ChapterItem";

const ChapterList = ({ studentList }) => {
  return (
    <div>
      {studentList.map((student, index) => (
        <div key={index} className="md:w-6/7">
          {Object.keys(student.subjects).map((subjectKey) => {
            const subject = student.subjects[subjectKey];
            return <ChapterItem key={subjectKey} subject={subject} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
