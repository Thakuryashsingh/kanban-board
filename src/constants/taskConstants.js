export const TASK_STATUSES = [
  { value: "todo", label: "Todo" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

export const TASK_PRIORITIES = [
  "Low",
  "Medium",
  "High",
];

export const INITIAL_TASK_FORM = {
  title: "",
  description: "",
  priority: "Medium",
  dueDate: "",
  status: "todo",
};

export const STORAGE_KEY = "kanban-board-tasks";