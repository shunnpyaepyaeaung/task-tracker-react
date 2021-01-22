import React, { useState } from "react";
import { DatePicker, Input } from "antd";
import "antd/dist/antd.css";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onChange(date, dateString) {
    setDay(date);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please add task");
      return;
    }
    onAdd({ task, day: day.toString(), reminder });
    setTask("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="field">
        <label>Task</label>
        <br />
        <Input
          className="input-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Add your task"
        />
      </div>
      <div className="field">
        <label>Select Date</label>
        <br />
        <DatePicker className="date-input" value={day} onChange={onChange} />
      </div>
      <div className="form-check form-control-check field">
        <label>Set Reminder</label>
        <Input
          checked={reminder}
          className="form-check-input"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        />
      </div>
      <input
        className="btn btn-dark btn-block"
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
