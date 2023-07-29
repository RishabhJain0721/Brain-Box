import React, { useState } from "react";
import AddResourceModal from "./AddResourceModal";
import AddChapterModal from "./AddChapterModal";

const ChapterItem = ({ subject }) => {
  const [chapters, setChapters] = useState(subject.chapters);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAddChapterModalOpen, setIsAddChapterModalOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null); // Add this state
  // const [newNotes, setNewNotes] = useState([]);
  // const [newVids, setNewVids] = useState([]);

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
    console.log("Type : ",type);
    console.log("Resource link : ", resourceLink);
    console.log("Chapter : ", chapter);
    if (type === "notes") {
      //search for the chapter in the chapters array
      const chapterToUpdate = Object.keys(chapters).find(
        (chapterKey) => chapters[chapterKey] === chapter
      );
      //update the chapter's notes array
      const updatedChapter = {
        ...chapter,
        notes: [...chapter.notes, resourceLink],
      };
      //update the chapters array with the modified chapter
      const updatedChapters = { ...chapters };
      updatedChapters[chapterToUpdate] = updatedChapter;
      setChapters(updatedChapters);
      // setNewNotes((prevNotes) => [...prevNotes, resourceLink]);

    } else if (type === "video") {
      //search for the chapter in the chapters array
      const chapterToUpdate = Object.keys(chapters).find(
        (chapterKey) => chapters[chapterKey] === chapter
      );
      //update the chapter's video array
      const updatedChapter = {
        ...chapter,
        vid: [...chapter.vid, resourceLink],
      };
      //update the chapters array with the modified chapter
      const updatedChapters = { ...chapters };
      updatedChapters[chapterToUpdate] = updatedChapter;
      setChapters(updatedChapters);

      // setNewVids((prevVids) => [...prevVids, resourceLink]);
    }
    setIsNotesModalOpen(false);
    setIsVideoModalOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
      <h2 className="text-2xl font-bold mb-2 bg-purple-600 px-4 py-1 rounded-md">
        {subject.name}
      </h2>

      {Object.keys(chapters).map((chapterKey) => {
        const chapter = chapters[chapterKey];
        return (
          <div key={chapterKey} className="pl-12 mt-2">
            <h3 className="font-bold bg-blue-600 text-white px-2 py-1 rounded-md mb-2">
              {chapter.name}
            </h3>
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
                onSubmit={(resourceLink) =>
                  handleAddResource("notes", resourceLink, selectedChapter) // Use the selected chapter here
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
                onSubmit={(resourceLink) =>
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
