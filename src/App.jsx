import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

import { useEffect } from "react";

function App() {
  const defaultTasks = [
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudando codando e pa",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar desenho",
      description: "Estudando desenhando e pa",
      isCompleted: false,
    },
  ];

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onSubmitAddTask(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center p-6 items-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onSubmitAddTask={onSubmitAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
