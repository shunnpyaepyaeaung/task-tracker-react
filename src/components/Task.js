import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.task}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "#d35d6e", cursor: "pointer" }}
        />
      </h5>
      <p className="dayStyle">{task.day}</p>
    </div>
  );
};

export default Task;
