// ChapterList.js

import React, { useContext, useEffect, useState } from "react";
import ChapterItem from "./ChapterItem";
import { NewSubjectContext } from "../Context/NewSubjectContext";
import { SelectSubjectContext } from "../Context/SelectSubjectContext";

const ChapterList = ({ student }) => {
  const { newSubject } = useContext(NewSubjectContext);
  const [updatedSubjectsList, setUpdatedSubjectsList] = useState(
    Object.values(student.subjects)
  );
  const { selectedSubject } = useContext(SelectSubjectContext);
  const [filteredSubjectList, setFilteredSubjectList] = useState([]);

  useEffect(() => {
    const filteredSubjectList =
      selectedSubject === ""
        ? updatedSubjectsList
        : updatedSubjectsList.filter(
            (subject) => subject.name === selectedSubject
          );
    setFilteredSubjectList(() => filteredSubjectList);
  }, [selectedSubject, updatedSubjectsList]);

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
        {filteredSubjectList.map((subject, index) => {
          return (
            <div key={index} className=" mb-10">
              {" "}
              {/* Add margin here */}
              <ChapterItem subject={subject} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
