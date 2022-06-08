import "./Modal.css";
import { useTaskContextProvider } from "../../context/task-context";

const Modal = ({ setModal, modalData, setModalData, edit }) => {
  const { taskDispatch } = useTaskContextProvider();

  const taskSubmiter = (e) => {
    e.preventDefault();
    setModal(false);
    setModalData({ title: "", description: "", time: "" });
    edit.editStatus
      ? taskDispatch({
          type: "EDIT_TASK",
          payload: edit.editId,
          payloadData: modalData,
        })
      : taskDispatch({ type: "ADD_TASK", payload: modalData });
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
            onClick={() => {
              setModal(false);
              setModalData({ title: "", description: "", time: "" });
            }}
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
              onClick={() => {
                setModal(false);
                setModalData({ title: "", description: "", time: "" });
              }}
            >
              Cancel
            </button>
            {edit.editStatus ? (
              <button className="modal-btn modal-add-btn" type="submit">
                Edit
              </button>
            ) : (
              <button className="modal-btn modal-add-btn" type="submit">
                Add
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export { Modal };
