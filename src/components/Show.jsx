import React from 'react';

const Show = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  const Completetasktoggle = (e, i) => {
    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    setTasks(copyTasks);
  };

  const deleteHandler = (i) => {
    const copyTasks = [...tasks];
    let isValid = false;
    if (!copyTasks[i].completed) {
      isValid = confirm("Do you really want to delete this task?");
    }
    if (isValid || copyTasks[i].completed) {
      copyTasks.splice(i, 1);
      setTasks(copyTasks);
    }
  };

  const editHandler = (i) => {
    const newTitle = prompt("Edit task:", tasks[i].title);
    if (newTitle !== null && newTitle.trim() !== "") {
      const copyTasks = [...tasks];
      copyTasks[i].title = newTitle.trim();
      setTasks(copyTasks);
    }
  };

  let taskRender = <h1 className='text-white bg-red-500 w-40 text-center mt-10 ml-20'>No Task Present</h1>;
  if (tasks.length > 0) {
    taskRender = tasks.map((task, index) => {
      return (
        <li className='flex bg-white h-9 w-[70%] gap-4 mt-3 -ml-2 pl-1 pr-1' key={index}>
          <div onClick={(e) => Completetasktoggle(e, index)} className={`${task.completed ? "bg-green-500 border-none" : "border"} h-5 w-5 border-orange-500 border-2 mt-2 rounded-full`}></div>
          <p className={`${task.completed && "line-through"} text-xl mt-1`}>{task.title}</p>
          <div className='mt-1'>
            <i onClick={() => editHandler(index)} className="ri-file-edit-line text-2xl cursor-pointer"></i>
            <i onClick={() => deleteHandler(index)} className="ri-delete-bin-2-line text-2xl cursor-pointer"></i>
          </div>
        </li>
      );
    });
  }

  return <ul className="list-decimal ml-8 mt-4">{taskRender}</ul>;
};

export default Show;
