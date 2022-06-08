import "./CreateTaskPage.css";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";
import { useTaskContextProvider } from "../../context/task-context";
import { Tasks } from "../../components/Tasks/Tasks";

const CreateTaskPage = () => {
  const { taskState } = useTaskContextProvider();

  const [modal, setModal] = useState(false);

  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    time: "",
  });

  const [edit, setEdit] = useState({ editStatus: false, editId: "" });

  return (
    <>
      <section className="tasks-container">
        <div className="task-todo-box">
          <div className="welcome-text">Welcome back Guest</div>
          <div className="task-text">
            {taskState.tasks.length === 0
              ? "You have 0 task to do start adding task"
              : `You have ${taskState.tasks.length} to do`}
          </div>
        </div>
        <div className="todo-list-container">
          <div className="todo-box">
            <div className="todo-main-text">To-Do List</div>
            <i
              className="fa-solid fa-circle-plus add-task"
              onClick={() => {
                setModal(true);
                setEdit((item) => ({ ...item, editStatus: false }));
              }}
            ></i>
          </div>
          {taskState.tasks.length === 0 ? (
            <div className="start-adding-task">
              start adding your todo's here
            </div>
          ) : (
            <div className="all-taks">
              {taskState.tasks.map((item) => {
                return (
                  <Tasks
                    tasks={item}
                    setModal={setModal}
                    setModalData={setModalData}
                    setEdit={setEdit}
                    key={item._id}
                  />
                );
              })}
            </div>
          )}
        </div>
        {modal ? (
          <Modal
            setModal={setModal}
            modalData={modalData}
            setModalData={setModalData}
            edit={edit}
          />
        ) : null}
      </section>
    </>
  );
};

export { CreateTaskPage };
