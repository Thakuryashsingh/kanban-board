
import { useMemo, useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import SearchFilters from "../components/SearchFilters";
import KanbanBoard from "../components/KanbanBoard";
import { useTasks } from "../hooks/useTask";
import { filterTasks } from "../utils/taskHealper";

function BoardPage() {
  const {
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
  } = useTasks();

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");

  const filters = { search, priority, status };

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filters),
    [tasks, search, priority, status]
  );

  const hasFilters =
    search.trim() !== "" ||
    priority !== "All" ||
    status !== "All";

  function clearFilters() {
    setSearch("");
    setPriority("All");
    setStatus("All");
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  }

  function handleEdit(task) {
    startEditing(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <Header totalTasks={tasks.length} />

      <TaskForm
        form={form}
        editingId={editingId}
        error={error}
        onChange={handleFormChange}
        onSubmit={submitTask}
        onCancel={resetForm}
      />

      <SearchFilters
        search={search}
        priority={priority}
        status={status}
        onSearchChange={setSearch}
        onPriorityChange={setPriority}
        onStatusChange={setStatus}
        onClear={clearFilters}
      />

      <KanbanBoard
        tasks={filteredTasks}
        hasTasks={tasks.length > 0}
        hasFilters={hasFilters}
        onClearFilters={clearFilters}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={updateTaskStatus}
      />
    </main>
  );
}

export default BoardPage;
