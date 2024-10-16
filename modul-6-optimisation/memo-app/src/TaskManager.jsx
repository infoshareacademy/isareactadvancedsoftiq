import React, { useState, useCallback, useEffect, useMemo, memo } from "react";

const AddTaskForm = memo(({ handleAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const onClick = () => {
    handleAddTask(taskName);
  };

  return (
    <>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={onClick}>Dodaj zadanie</button>
    </>
  );
});

const TasksList = memo(({ tasks, toggleTaskCompletion, handleDeleteTask }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.name}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </>
  );
});

const Comp = () => {
  const [val, setVal] = useState("");
  return (
    <h1>
      Comp<button onClick={() => setVal(val + 1)}>{val}</button>
    </h1>
  );
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [val, setVal] = useState(0);

  const handleAddTask = useCallback((taskName) => {
    if (taskName.trim() === "") return;
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  const handleDeleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }, [tasks, filter]);

  return (
    <div>
      <AddTaskForm handleAddTask={handleAddTask} />
      <div>
        <button onClick={() => setFilter("all")}>Wszystkie</button>
        <button onClick={() => setFilter("completed")}>Ukończone</button>
        <button onClick={() => setFilter("active")}>Aktywne</button>
      </div>
      <TasksList
        tasks={filteredTasks}
        handleDeleteTask={handleDeleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <Comp />
      <button onClick={() => setVal(val + 1)}>render</button>
    </div>
  );
};

export default TaskManager;
