
function Header({ totalTasks }) {
  return (
    <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p className="text-xs font-bold tracking-[0.2em] text-orange-600">
          YOUR WORKSPACE
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Kanban Board
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Organize your tasks. Get things done.
        </p>
      </div>

      <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
        {totalTasks} {totalTasks === 1 ? "task" : "tasks"}
      </span>
    </header>
  );
}

export default Header;
