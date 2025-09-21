const Headbar = () => {
  return (
    <div className="flex flex-col bg-zinc-900 text-white p-2 border-b border-zinc-700">
      {/* Top bar: Breadcrumb and Search */}
      <div className="flex justify-between items-center mb-2">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-xl">🏠</span>
          <span className="text-zinc-400">Home</span>
          <span className="text-zinc-500">›</span>
          {/* Add more breadcrumb levels if needed */}
        </div>

        {/* Search */}
        <div className="flex items-center bg-zinc-800 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search Home"
            className="bg-transparent text-sm text-white px-3 py-1 outline-none w-48"
          />
          <button className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-600">
            🔍
          </button>
        </div>
      </div>

      {/* Toolbar buttons */}
      <div className="flex items-center gap-3 text-sm text-zinc-300 overflow-x-auto">
        <button className="hover:text-white">➕ New</button>
        <button className="hover:text-white">✂️ Cut</button>
        <button className="hover:text-white">📄 Copy</button>
        <button className="hover:text-white">📋 Paste</button>
        <button className="hover:text-white">✏️ Rename</button>
        <button className="hover:text-white">📤 Share</button>
        <button className="hover:text-white">🗑️ Delete</button>
        <button className="hover:text-white">⬆️ Sort</button>
        <button className="hover:text-white">👁️ View</button>
        <button className="hover:text-white">🔽 Filter</button>
        <button className="hover:text-white">⋯</button>
        <button className="hover:text-white ml-auto">🖼️ Preview</button>
      </div>
    </div>
  );
};

export default Headbar;
