"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";

import { AddInput } from "@/components/layouts/AddInput";
import { TodoLine } from "@/components/layouts/TodoLine";
import {
  createTask,
  deleteTask,
  findTasks,
  toggleCheckTask,
} from "@/lib/database/tasks";
import { Subtitle, Title } from "@/components/ui/Typography";

const Page = () => {
  // Constantes
  const [isLoading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Chargement initial
  useEffect(() => {
    updateTasks();
    setLoading(false);
  }, []);

  // CRUD
  const addTask = () => {
    createTask(inputValue);
    updateTasks();
  };

  const updateTasks = () => {
    findTasks().then((res) => setTasks(res));
  };

  const removeTask = (id) => {
    deleteTask(id);
    updateTasks();
  };

  const checkTask = (id) => {
    const value = getTaskLocally(id).checked;
    toggleCheckTask(id, value);
    updateTasks();
  };

  const getTaskLocally = (id) => {
    return tasks.find((task) => task.id === id);
  };

  // Rendu

  if (isLoading) return <div>En cours de chargement</div>;

  return (
    <div className="container mx-auto flex flex-col gap-4">
      {/* Titre */}
      <Title>ToDo List</Title>

      {/* Input d'ajout */}
      <AddInput value={inputValue} onChange={setInputValue} onClick={addTask} />

      {/* Titre des tasks */}
      <div className="flex justify-center items-center gap-7">
        <Subtitle>Liste</Subtitle>
        <button
          className="bg-orange-500 p-2 rounded-lg"
          onClick={() => updateTasks()}
        >
          <RefreshCcw />
        </button>
      </div>

      {/* Affichage des tasks */}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return (
            <TodoLine
              key={task.id}
              checked={task.checked}
              id={task.id}
              validate={checkTask}
              remove={removeTask}
            >
              {task.title}
            </TodoLine>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
