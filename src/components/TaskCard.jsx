
import { Pencil, Trash2 } from "lucide-react";
import { TASK_STATUSES } from "../constants/taskConstants";

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span
          className={`rounded-md px-2 py-1 text-xs font-bold ${
            task.priority === "High"
              ? "bg-red-100 text-red-700"
              : task.priority === "Medium"
                ? "bg-amber-100 text-amber-700"
                : "bg-green-100 text-green-700"
          }`}
        >
          {task.priority}
        </span>

        <span className="text-xs text-gray-500">
          {task.dueDate || "No due date"}
        </span>
      </div>

      <h3 className="mt-3 break-words text-base font-bold text-gray-900">
        {task.title}
      </h3>

      {task.description && (
        <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
          {task.description}
        </p>
      )}

      <label className="mt-4 block text-xs font-semibold text-gray-600">
        Move to
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          aria-label={`Change status of ${task.title}`}
          className="mt-1.5 rounded-lg border border-gray-200 bg-white text-sm"
        >
          {TASK_STATUSES.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-4 flex gap-2 border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={() => onEdit(task)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
        >
          <Pencil size={15} />
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
        >
          <Trash2 size={15} />
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
