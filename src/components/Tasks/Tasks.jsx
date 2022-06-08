import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContextProvider } from "../../context/task-context";
import "./Tasks.css";

const Tasks = ({ tasks, setModal, setModalData }) => {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const { taskDispatch } = useTaskContextProvider();

  return (
    <div className="all-tasks-container">
      <input
        type="checkbox"
        className="task-checkbox"
        onClick={() => setChecked((item) => !item)}
      />
      <span className={`taks-title ${checked ? "crossline" : null}`}>
        {tasks.title}
      </span>
      <div className="all-task-icns">
        <i
          className="fa-solid fa-clock"
          onClick={() => navigate(`/tasks/${tasks._id}`)}
        ></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {
            setModal(true);
          }}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() =>
            taskDispatch({ type: "DELETE_TASK", payload: tasks._id })
          }
        ></i>
      </div>
    </div>
  );
};

export { Tasks };
