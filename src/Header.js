import React from "react";
import Button from "./components/Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "danger" : "dark"}
        text={showAddTask ? "Close" : "Add Task"}
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;
