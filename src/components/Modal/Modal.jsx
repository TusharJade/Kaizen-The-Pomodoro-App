import "./Modal.css";
import { useTaskContextProvider } from "../../context/task-context";

const Modal = ({ setModal, modalData, setModalData }) => {
  const { taskDispatch } = useTaskContextProvider();

  const taskSubmiter = (e) => {
    e.preventDefault();
    taskDispatch({ type: "ADD_TASK", payload: modalData });
    setModal(false);
    setModalData({ title: "", description: "", time: "" });
  };

  return (
    <>
      <form
        className="modal-box-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={taskSubmiter}
      >
        <div className="modal-box">
          <i
            className="fa-solid fa-xmark modal-close-icn"
            onClick={() => setModal(false)}
          ></i>
          <input
            placeholder="Add title"
            type="text"
            className="task-input"
            value={modalData.title}
            onChange={(e) =>
              setModalData((item) => ({ ...item, title: e.target.value }))
            }
            required
          />
          <textarea
            placeholder="Add description"
            className="task-description"
            value={modalData.description}
            onChange={(e) =>
              setModalData((item) => ({ ...item, description: e.target.value }))
            }
            required
          />
          <input
            placeholder="Add time in minutes"
            type="number"
            className="task-time"
            value={modalData.time}
            onChange={(e) =>
              setModalData((item) => ({ ...item, time: e.target.value }))
            }
            max="60"
            required
          />
          <div className="modal-btn-container">
            <button
              className="modal-btn modal-cancel-btn"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button className="modal-btn modal-add-btn" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export { Modal };
