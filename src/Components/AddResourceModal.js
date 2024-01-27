import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../Context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const customStyles = {
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
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  input: {
    color: "black",
  },
};

const AddResourceModal = ({
  isOpen,
  onRequestClose,
  type,
  onSubmit,
  currSubject,
  currChapter,
}) => {
  const { currentUser } = useContext(AuthContext);
  const [resourceLink, setResourceLink] = useState("");

  const handleSubmit = async (e) => {
    console.log("Current chapter:", currChapter);
    e.preventDefault();

    // Get the logged-in user's document ID
    const userId = currentUser.uid;
    const docRef = doc(db, "students", userId);

    // Get the student document data
    const studentDocSnap = await getDoc(docRef);
    const studentData = studentDocSnap.data();

    // Find the subject to update
    const subjectToUpdate = studentData.subjects.find(
      (subject) => subject.name === currSubject.name
    );

    if (subjectToUpdate) {
      // Ensure that 'chapters' is an array before attempting to find the chapter
      if (Array.isArray(subjectToUpdate.chapters)) {
        // Find the chapter to update
        const chapterToUpdate = subjectToUpdate.chapters.find(
          (chapter) => chapter.name === currChapter.name
        );

        if (chapterToUpdate) {
          // If the chapter exists, create a new resource link
          const newResource = resourceLink.trim();

          // Update the chapter's notes or vid array based on the resource type
          if (type === "notes") {
            const updatedChapter = {
              ...chapterToUpdate,
              notes: [...chapterToUpdate.notes, newResource],
            };

            // Find the index of the chapter in the chapters array
            const chapterIndex = subjectToUpdate.chapters.findIndex(
              (chapter) => chapter.name === currChapter.name
            );

            // Update the chapters array with the modified chapter
            subjectToUpdate.chapters[chapterIndex] = updatedChapter;
          } else if (type === "video") {
            const updatedChapter = {
              ...chapterToUpdate,
              vid: [...chapterToUpdate.vid, newResource],
            };

            // Find the index of the chapter in the chapters array
            const chapterIndex = subjectToUpdate.chapters.findIndex(
              (chapter) => chapter.name === currChapter.name
            );

            // Update the chapters array with the modified chapter
            subjectToUpdate.chapters[chapterIndex] = updatedChapter;
          }
        }
      }
    }

    // Update the 'subjects' array in the user's document with the modified data
    await updateDoc(docRef, {
      subjects: studentData.subjects,
    });

    if (resourceLink.trim() !== "") {
      onSubmit(resourceLink);
      setResourceLink("");
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Add Resource Modal"
    >
      <h2 className="text-2xl mb-4 font-bold">
        {type === "notes" ? "Add Notes" : "Add Video"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter resource link..."
          value={resourceLink}
          onChange={(e) => setResourceLink(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          style={customStyles.input}
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onRequestClose}
            className="mr-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddResourceModal;
