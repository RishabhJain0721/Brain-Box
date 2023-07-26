import React, { useState } from "react";
import AddResourceModal from "./AddResourceModal";

const ChapterItem = ({ subject }) => {
  const [chapters, setChapters] = useState(subject.chapters);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleAddResource = (type, resourceLink) => {
    const updatedChapters = { ...chapters };
    const newResource = { link: resourceLink }; // Assuming it's just a link for simplicity
    if (type === "notes") {
      updatedChapters.notes.push(newResource);
    } else if (type === "video") {
      updatedChapters.vid.push(newResource);
    }
    setChapters(updatedChapters);
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
                {chapter.notes.map((noteLink, noteIndex) => (
                  <li key={noteIndex}>
                    <a href={noteLink.link} className="text-blue-600 hover:underline">
                      {noteLink.link}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-purple-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
                onClick={() => setIsNotesModalOpen(true)}
              >
                Add Notes
              </button>
              <AddResourceModal
                isOpen={isNotesModalOpen}
                onRequestClose={() => setIsNotesModalOpen(false)}
                type="notes"
                onSubmit={(resourceLink) => handleAddResource("notes", resourceLink)}
              />
            </div>
            <div>
              <h4 className="font-semibold">Video Links:</h4>
              <ul className="list-disc list-inside">
                {chapter.vid.map((videoLink, videoIndex) => (
                  <li key={videoIndex}>
                    <a href={videoLink.link} className="text-blue-600 hover:underline">
                      {videoLink.link}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-purple-600 text-white px-2 py-1 rounded-md mt-2 text-xs"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Add Video
              </button>
              <AddResourceModal
                isOpen={isVideoModalOpen}
                onRequestClose={() => setIsVideoModalOpen(false)}
                type="video"
                onSubmit={(resourceLink) => handleAddResource("video", resourceLink)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChapterItem;
