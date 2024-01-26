import React, { useState, useContext } from "react";
import AddResourceModal from "./AddResourceModal";
import AddChapterModal from "./AddChapterModal";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const ChapterItem = ({ subject }) => {
  const { currentUser } = useContext(AuthContext);
  const [chapters, setChapters] = useState(subject.chapters);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAddChapterModalOpen, setIsAddChapterModalOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null); // Add this state

  const handleAddChapter = (chapterName) => {
    if (chapterName.trim() === "") {
      return;
    }
    const updatedChapters = { ...chapters };
    const newChapterKey = `chapter-${Date.now()}`;
    updatedChapters[newChapterKey] = {
      name: chapterName,
      notes: [],
      vid: [],
    };
    setChapters(updatedChapters);
    setIsAddChapterModalOpen(false);
  };

  const handleAddResource = (type, resourceLink, chapter) => {
    console.log("Type : ", type);
    console.log("Resource link : ", resourceLink);
    console.log("Chapter : ", chapter);

    //search for the chapter in the chapters array
    const chapterToUpdate = Object.keys(chapters).find(
      (chapterKey) => chapters[chapterKey] === chapter
    );
    let updatedChapter;
    if (type === "notes") {
      //update the chapter's notes array
      updatedChapter = {
        ...chapter,
        notes: [...chapter.notes, resourceLink],
      };
    } else if (type === "video") {
      //update the chapter's video array
      updatedChapter = {
        ...chapter,
        vid: [...chapter.vid, resourceLink],
      };
    }
    //update the chapters array with the modified chapter
    const updatedChapters = { ...chapters };
    updatedChapters[chapterToUpdate] = updatedChapter;
    setChapters(updatedChapters);

    setIsNotesModalOpen(false);
    setIsVideoModalOpen(false);
  };

  const handleDeleteResource = async (
    type,
    chapter,
    resourceIndex,
    currSubject
  ) => {
    //search for the chapter in the chapters array
    const chapterToUpdate = Object.keys(chapters).find(
      (chapterKey) => chapters[chapterKey] === chapter
    );
    let updatedChapter;
    if (type === "notes") {
      //update the chapter's notes array
      updatedChapter = {
        ...chapter,
        notes: chapter.notes.filter((note, index) => index !== resourceIndex),
      };
    } else if (type === "video") {
      //update the chapter's video array
      updatedChapter = {
        ...chapter,
        vid: chapter.vid.filter((vid, index) => index !== resourceIndex),
      };
    }

    //update the chapters array with the modified chapter
    const updatedChapters = { ...chapters };
    updatedChapters[chapterToUpdate] = updatedChapter;
    setChapters(updatedChapters);


    const userId = currentUser.uid;
    const docRef = doc(db, "students", userId);
    try {
      // Get the student document data
      const studentDocSnap = await getDoc(docRef);
      const studentData = studentDocSnap.data();
  
      // Find the subject to update
      const subjectToUpdate = studentData.subjects.find(
        (subject) => subject.name === currSubject
      );
  
      if (subjectToUpdate) {
        // Update the chapters array with the modified chapter
        const updatedSubjects = [...studentData.subjects];
        const subjectIndexToUpdate = updatedSubjects.findIndex(
          (subject) => subject.name === currSubject
        );
  
        if (subjectIndexToUpdate !== -1) {
          updatedSubjects[subjectIndexToUpdate].chapters = updatedChapters;
        }
  
        // Update the student document with the new subjects array
        await updateDoc(docRef, { subjects: updatedSubjects });
        console.log("Resource deleted successfully from Firestore.");
      } else {
        console.log("Subject not found in Firestore.");
      }
    } catch (error) {
      console.error("Error deleting resource from Firestore:", error);
    }  };


    const handleDeleteChapter = async (chapterKey) => {
      try {
        // Remove the chapter from the chapters state
        const updatedChapters = { ...chapters };
        delete updatedChapters[chapterKey];
        setChapters(updatedChapters);
  
        // Get the logged-in user's document ID
        const userId = currentUser.uid;
        const docRef = doc(db, "students", userId);
  
        // Get the student document data
        const studentDocSnap = await getDoc(docRef);
        const studentData = studentDocSnap.data();
  
        // Find the subject to update
        const subjectToUpdate = studentData.subjects.find(
          (subject) => subject.name === subject.name
        );
  
        if (subjectToUpdate) {
          // Update the chapters array with the modified chapter list
          const updatedSubjects = [...studentData.subjects];
          const subjectIndexToUpdate = updatedSubjects.findIndex(
            (subject) => subject.name === subject.name
          );
  
          if (subjectIndexToUpdate !== -1) {
            updatedSubjects[subjectIndexToUpdate].chapters = updatedChapters;
          }
  
          // Update the student document with the new subjects array
          await updateDoc(docRef, { subjects: updatedSubjects });
          console.log("Chapter deleted successfully from Firestore.");
        } else {
          console.log("Subject not found in Firestore.");
        }
      } catch (error) {
        console.error("Error deleting chapter from Firestore:", error);
      }
    };
  

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
      <h2 className="text-4xl font-bold mb-4 bg-purple-600 px-4 py-1.5 rounded-md">
        {subject.name}
      </h2>

      {Object.keys(chapters).map((chapterKey) => {
        const chapter = chapters[chapterKey];
        return (
          <div key={chapterKey} className="pl-12 mt-2">
            <h3 className="font-bold bg-blue-600 text-white px-2 py-1 rounded-md mb-2">
              { isNaN(parseInt(chapterKey)+1) ? "" : (parseInt(chapterKey)+1)+". "}
              {chapter.name}
            </h3>
            <button
              className="bg-red-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
              onClick={() => handleDeleteChapter(chapterKey)}
            >
              Delete Chapter
            </button>
            <div>
              <h4 className="font-semibold">Notes:</h4>
              <ul className="list-disc list-inside">
                {chapter.notes.map((note, noteIndex) => (
                  <li key={noteIndex}>
                    <a
                      href={note}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {note}
                    </a>
                    <button
                      className="ml-5 text-red-400 p-1 rounded-md text-xs"
                      onClick={() =>
                        handleDeleteResource(
                          "notes",
                          chapter,
                          noteIndex,
                          subject.name
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="bg-purple-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
                onClick={() => {
                  setIsNotesModalOpen(true);
                  setSelectedChapter(chapter); // Set the selected chapter
                }}
              >
                Add Notes
              </button>
              <AddResourceModal
                isOpen={isNotesModalOpen}
                onRequestClose={() => {
                  setIsNotesModalOpen(false);
                  setSelectedChapter(null); // Reset the selected chapter
                }}
                type="notes"
                onSubmit={
                  (resourceLink) =>
                    handleAddResource(
                      "notes",
                      resourceLink,
                      selectedChapter,
                      subject.name
                    ) // Use the selected chapter here
                }
                currSubject={subject}
                currChapter={selectedChapter}
              />
            </div>
            <div>
              <h4 className="font-semibold">Video Links:</h4>
              <ul className="list-disc list-inside">
                {chapter.vid.map((videoLink, videoIndex) => (
                  <li key={videoIndex}>
                    <a
                      href={videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {videoLink}
                    </a>
                    <button
                      className="ml-5 text-red-400 p-1 rounded-md text-xs"
                      onClick={() =>
                        handleDeleteResource(
                          "video",
                          chapter,
                          videoIndex,
                          subject.name
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="bg-purple-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
                onClick={() => {
                  setIsVideoModalOpen(true);
                  setSelectedChapter(chapter); // Set the selected chapter
                }}
              >
                Add Video
              </button>
              <AddResourceModal
                isOpen={isVideoModalOpen}
                onRequestClose={() => {
                  setIsVideoModalOpen(false);
                  setSelectedChapter(null); // Reset the selected chapter
                }}
                type="video"
                onSubmit={
                  (resourceLink) =>
                    handleAddResource("video", resourceLink, selectedChapter) // Use the selected chapter here
                }
                currSubject={subject}
                currChapter={selectedChapter}
              />
            </div>
          </div>
        );
      })}

      <button
        className="bg-purple-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
        onClick={() => setIsAddChapterModalOpen(true)}
      >
        Add Chapter
      </button>
      <AddChapterModal
        isOpen={isAddChapterModalOpen}
        onRequestClose={() => setIsAddChapterModalOpen(false)}
        type="chapter"
        onSubmit={handleAddChapter}
        currSubject={subject}
      />
    </div>
  );
};

export default ChapterItem;
