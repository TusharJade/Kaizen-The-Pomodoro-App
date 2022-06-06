import { useState } from "react";
import "./Modal.css";

const Modal = ({ status }) => {
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    time: "",
  });
  return (
    <>
      <form
        className="modal-box-container"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="modal-box">
          <i
            className="fa-solid fa-xmark modal-close-icn"
            onClick={() => status(false)}
          ></i>
          <input
            placeholder="Add title"
            type="text"
            className="task-input"
            onChange={(e) =>
              setModalData((item) => ({ ...item, title: e.target.value }))
            }
            required
          />
          <textarea
            placeholder="Add description"
            className="task-description"
            onChange={(e) =>
              setModalData((item) => ({ ...item, description: e.target.value }))
            }
            required
          />
          <input
            placeholder="Add time in minutes"
            type="number"
            className="task-time"
            onChange={(e) =>
              setModalData((item) => ({ ...item, time: e.target.value }))
            }
            required
          />
          <div className="modal-btn-container">
            <button
              className="modal-btn modal-cancel-btn"
              onClick={() => status(false)}
            >
              Cancel
            </button>
            <button className="modal-btn modal-add-btn">Add</button>
          </div>
        </div>
      </form>
    </>
  );
};

export { Modal };
