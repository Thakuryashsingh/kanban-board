
import {
  INITIAL_TASK_FORM,
  TASK_PRIORITIES,
  TASK_STATUSES,
} from "../constants/taskConstants";

function TaskForm({
  form,
  editingId,
  error,
  onChange,
  onSubmit,
  onCancel,
}) {
  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        {editingId ? "Edit Task" : "Add a New Task"}
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Task title *
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="What needs to be done?"
            maxLength={120}
            required
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            placeholder="Add some details..."
            rows={3}
            maxLength={1000}
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <label className="block text-sm font-medium text-gray-700">
            Priority
            <select
              name="priority"
              value={form.priority}
              onChange={onChange}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5"
            >
              {TASK_PRIORITIES.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Due date
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              min={minDate}
              onChange={onChange}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2.5"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Status
            <select
              name="status"
              value={form.status}
              onChange={onChange}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5"
            >
              {TASK_STATUSES.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-lg bg-orange-600 px-5 py-2.5 font-semibold text-white hover:bg-orange-700"
          >
            {editingId ? "Save Changes" : "Add Task"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg bg-gray-100 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
