import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../Context/AuthContext";
import { NewSubjectContext } from "../Context/NewSubjectContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

Modal.setAppElement("#root"); // Set the root element as app element for accessibility

const customStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    height: "fit-content",
    padding: "20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2D3748",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

const AddSubjectModal = ({ isOpen, onRequestClose }) => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch2 } = useContext(NewSubjectContext);
  const [subjectName, setSubjectName] = useState("");

  const handleAdd = async () => {
    // Get the logged-in user's document ID
    const userId = currentUser.uid;

    const docRef = doc(db, "students", userId);
    // Update the 'subjects' array in the user's document with the new subject
    await updateDoc(docRef, {
      subjects: arrayUnion({ name: subjectName, chapters: [] }),
    });

    // Clear the input field
    setSubjectName("");

    // Call the function passed from SubjectItem to handle adding the new subject
    dispatch2({
      type: "SET_NEW_SUBJECT",
      payload: { name: subjectName, chapters: [] },
    });

    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Subject Modal"
      style={customStyles}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Subject</h2>
      <div className="mb-4">
        <label htmlFor="subjectName" className="block text-white mb-2">
          Subject Name
        </label>
        <input
          type="text"
          id="subjectName"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAdd}
        >
          Add Subject
        </button>
      </div>
    </Modal>
  );
};

export default AddSubjectModal;
