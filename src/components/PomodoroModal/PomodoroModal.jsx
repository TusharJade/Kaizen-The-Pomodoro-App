import React from "react";
import "./PomodoroModal.css";

const PomodoroModal = ({ setShow }) => {
  return (
    <form className="main-box-modal">
      <div className="pomo-innermodal">
        <div className="pomo-modal-header">
          <div className="setime">Set Time</div>
          <img
            src="/assets/cross.svg"
            className="cross-icon"
            onClick={() => {
              setShow(false);
            }}
            alt="error"
          />
        </div>
      </div>
    </form>
  );
};

export default PomodoroModal;
