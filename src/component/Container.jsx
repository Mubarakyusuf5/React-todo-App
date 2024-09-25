import React from "react";

export const Container = ({ task, deleteTask, completedTask }) => {
  return (
    <>
      <ul>
        {task.map((todo, index) => (
          <li key={index}
          
          >
            <span
              onClick={() => completedTask(index)}
              className={todo.completed ? "task checked" : "task"}

            >
              <p></p>
              {todo.text}
            </span>
            <button onClick={() => deleteTask(index)} className="del">
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
