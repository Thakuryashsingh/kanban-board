
export function filterTasks(tasks, filters) {
  const { search, priority, status } = filters;

  return tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesPriority =
      priority === "All" || task.priority === priority;

    const matchesStatus =
      status === "All" || task.status === status;

    return matchesSearch && matchesPriority && matchesStatus;
  });
}

export function validateTask(task) {
  if (!task.title.trim()) {
    return "Task title is required.";
  }

  if (task.title.trim().length > 120) {
    return "Title must be 120 characters or fewer.";
  }

  if (task.description.length > 1000) {
    return "Description must be 1000 characters or fewer.";
  }

  if (
    task.dueDate &&
    task.dueDate < getLocalDateString()
  ) {
    return "Due date cannot be in the past.";
  }

  return "";
}

function getLocalDateString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
