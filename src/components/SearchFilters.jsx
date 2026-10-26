
import {
  TASK_PRIORITIES,
  TASK_STATUSES,
} from "../constants/taskConstants";

function SearchFilters({
  search,
  priority,
  status,
  onSearchChange,
  onPriorityChange,
  onStatusChange,
  onClear,
}) {
  const hasFilters =
    search.trim() !== "" ||
    priority !== "All" ||
    status !== "All";

  return (
    <section className="grid grid-cols-1 gap-3 rounded-xl border border-gray-200 bg-white p-4 md:grid-cols-2 xl:grid-cols-[1fr_180px_180px_auto]">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks by title..."
        aria-label="Search tasks"
        className="min-w-0 rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-orange-500"
      />

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        aria-label="Filter by priority"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2.5"
      >
        <option value="All">All priorities</option>
        {TASK_PRIORITIES.map((item) => (
          <option key={item} value={item}>
            {item} priority
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        aria-label="Filter by status"
        className="rounded-lg border border-gray-300 bg-white px-3 py-2.5"
      >
        <option value="All">All statuses</option>
        {TASK_STATUSES.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {hasFilters && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg bg-gray-100 px-4 py-2.5 font-semibold text-gray-700 hover:bg-gray-200"
        >
          Clear filters
        </button>
      )}
    </section>
  );
}

export default SearchFilters;
