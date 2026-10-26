
import { useEffect, useState } from "react";
import { INITIAL_TASK_FORM } from "../constants/taskConstants";
import { loadTasks, saveTasks } from "../utils/localStorage";
import { validateTask } from "../utils/taskHealper";

export function useTasks() {
  const [tasks, setTasks] = useState(loadTasks);
  const [form, setForm] = useState({ ...INITIAL_TASK_FORM });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  }

  function resetForm() {
    setForm({ ...INITIAL_TASK_FORM });
    setEditingId(null);
    setError("");
  }

  function submitTask(event) {
    event.preventDefault();

    const validationError = validateTask(form);

    if (validationError) {
      setError(validationError);
      return false;
    }

    if (editingId) {
      setTasks((current) =>
        current.map((task) =>
          task.id === editingId
            ? { ...task, ...form, title: form.title.trim() }
            : task
        )
      );
    } else {
      const newTask = {
        ...form,
        id: crypto.randomUUID(),
        title: form.title.trim(),
        createdAt: Date.now(),
      };

      setTasks((current) => [...current, newTask]);
    }

    resetForm();
    return true;
  }

  function startEditing(task) {
    setForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: task.status,
    });

    setEditingId(task.id);
    setError("");
  }

  function deleteTask(id) {
    setTasks((current) =>
      current.filter((task) => task.id !== id)
    );

    if (editingId === id) {
      resetForm();
    }
  }

  function updateTaskStatus(id, status) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  }

  return {
    tasks,
    form,
    editingId,
    error,
    handleFormChange,
    submitTask,
    startEditing,
    deleteTask,
    updateTaskStatus,
    resetForm,
  };
}
