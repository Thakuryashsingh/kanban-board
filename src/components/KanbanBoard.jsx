
import { TASK_STATUSES } from "../constants/taskConstants";
import TaskColumn from "./TaskColumn";
import EmptyState from "./EmptyState";

function KanbanBoard({
  tasks,
  hasTasks,
  hasFilters,
  onClearFilters,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  if (!hasTasks) {
    return (
      <EmptyState
        title="Your board is empty"
        message="Add your first task using the form above."
      />
    );
  }

  if (tasks.length === 0 && hasFilters) {
    return (
      <EmptyState
        title="No matching tasks"
        message="Try a different search or change your filters."
        actionLabel="Clear filters"
        onAction={onClearFilters}
      />
    );
  }

  return (
    <section className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
      {TASK_STATUSES.map((status) => (
        <TaskColumn
          key={status.value}
          status={status.value}
          tasks={tasks.filter(
            (task) => task.status === status.value
          )}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </section>
  );
}

export default KanbanBoard;
