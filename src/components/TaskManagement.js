import React, { useState } from "react";

const TaskManagement = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [duedate, setduedate] = useState(new Date());
  const createTask = () => {
    console.log(title);
    console.log(description);
    console.log(duedate);
  };

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <h1>Task Management Dashboard</h1>
        <div className="ms-3">
          <label>Task Title</label>
          <input
            className="ms-3"
            value={title}
            placeholder="Enter Task Title"
            onChange={(e) => settitle(e.target.value)}
            type="text"
          />
        </div>
        <br></br>
        <div className="ms-3">
          <label>Task Description</label>
          <textarea
            type="text"
            className="ms-3"
            value={description}
            placeholder="Enter Task Description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <br></br>
        <div className="ms-3">
          <label>Task due date</label>
          <input
            className="ms-3"
            value={duedate}
            placeholder="Enter Task Due Date"
            onChange={(e) => setduedate(e.target.value)}
            type="date"
          />
        </div>

        <br></br>
      </div>
      <button
        style={{ backgroundColor: "pink", color: "purple" }}
        type="btn"
        className="m-2 p-2"
        onClick={() => createTask()}
      >
        Create Task
      </button>
    </>
  );
};
export default TaskManagement;
