import React from "react";

export const Input = ({value, change, press, click}) => {
  return (
    <>
      <div className="input">
        <input 
        type="text" 
        onChange={change} 
        value={value}
        onKeyDown={e => press(e)}
        placeholder="Enter a task..."
        />
        <button onClick={click}>Add task</button>
      </div>
    </>
  );
};
