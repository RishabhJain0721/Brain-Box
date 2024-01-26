import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../Context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1f2937",
    color: "white",
    border: "none",
    borderRadius: "8px",
    width: "320px",
    padding: "24px",
  },
  input: {
    color: "black",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px",
    marginBottom: "12px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "16px",
  },
  cancelButton: {
    backgroundColor: "#e53e3e",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    marginRight: "8px",
    cursor: "pointer",
  },
  saveButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const AddChapterModal = ({ isOpen, onRequestClose, onSubmit, currSubject }) => {
  const { currentUser } = useContext(AuthContext);
  const [chapterName, setChapterName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the logged-in user's document ID
    const userId = currentUser.uid;
    const docRef = doc(db, "students", userId);
    // Update the 'subjects' array in the user's document with the new subject
    const studentDocSnap = await getDoc(docRef);
    const studentData = studentDocSnap.data();

    const subjectToUpdate = studentData.subjects.find(
      (subject) => subject.name === currSubject.name
    );

    console.log(subjectToUpdate);
    if (subjectToUpdate) {
      // If the subject exists, add the new chapter to its chapters array
      const newChapter = {
        name: chapterName,
        notes: [],
        vid: [],
      };
      const updatedSubject = {
        ...subjectToUpdate,
        chapters: [...subjectToUpdate.chapters, newChapter],
      };

      // Find the index of the subject in the subjects array
      const subjectIndex = studentData.subjects.findIndex(
        (subject) => subject.name === currSubject.name
      );

      // Update the subjects array with the modified subject
      studentData.subjects[subjectIndex] = updatedSubject;

      // Update only the specific subject's chapters array in the user's document
      await updateDoc(docRef, {
        subjects: studentData.subjects,
      });
    }

    if (chapterName.trim() !== "") {
      onSubmit(chapterName);
      setChapterName("");
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Add Chapter Modal"
    >
      <h2 className="text-2xl mb-4 font-bold">Add New Chapter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter chapter name..."
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
          style={customStyles.input}
        />
        <div style={customStyles.buttonContainer}>
          <button
            type="button"
            onClick={onRequestClose}
            style={customStyles.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" style={customStyles.saveButton}>
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddChapterModal;
