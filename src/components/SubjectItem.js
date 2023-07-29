// SubjectItem.js

import React, { useState } from "react";
import AddSubjectModal from "./AddSubjectModal";

const SubjectItem = ({ subjects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSubjectClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
      <h2 className="text-l mb-2 text-center">
        {subjects.map((subject, index) => (
          <div key={index}>{subject.name}</div>
        ))}
      </h2>
      <button
        className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm"
        onClick={handleAddSubjectClick}
      >
        Add Subject
      </button>
      <AddSubjectModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SubjectItem;
