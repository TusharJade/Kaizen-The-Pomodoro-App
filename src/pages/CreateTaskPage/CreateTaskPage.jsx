import "./CreateTaskPage.css";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

const CreateTaskPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <section className="tasks-container">
        <div className="task-todo-box">
          <div className="welcome-text">Welcome back Guest</div>
          <div className="task-text">
            You have 0 task to do start adding task
          </div>
        </div>
        <div className="todo-list-container">
          <div className="todo-box">
            <div className="todo-main-text">To-Do List</div>
            <i
              className="fa-solid fa-circle-plus add-task"
              onClick={() => setModal(true)}
            ></i>
          </div>
          <div className="start-adding-task">start adding your todo's here</div>
        </div>
        {modal ? <Modal status={setModal} /> : null}
      </section>
    </>
  );
};

export { CreateTaskPage };
