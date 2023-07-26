import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1f2937", // Background color
    color: "white", // Text color
    border: "none",
    borderRadius: "8px",
    width: "320px",
    padding: "24px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Background color of overlay
  },
  input: {
    // Text color for input fields
    color: "black",
  }, 
};

const AddResourceModal = ({ isOpen, onRequestClose, type, onSubmit }) => {
  const [resourceLink, setResourceLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resourceLink);
    setResourceLink("");
    onRequestClose();
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
