
import { TASK_STATUSES } from "../constants/taskConstants";
import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

function TaskColumn({
  status,
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const column = TASK_STATUSES.find(
    (item) => item.value === status
  );

  return (
    <section className="min-w-0 rounded-xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
      <header className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-bold text-gray-800">
          {column.label}
        </h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-600">
          {tasks.length}
        </span>
      </header>

      <div className="grid content-start gap-3">
        {tasks.length === 0 ? (
          <EmptyState
            title="No tasks here"
            message="Tasks with this status will appear here."
          />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskColumn;
