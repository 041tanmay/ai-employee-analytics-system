function SearchFilter({ department, setDepartment, onSearch }) {
  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-3 rounded bg-slate-800 w-full"
      />

      <button
        onClick={onSearch}
        className="bg-cyan-500 px-6 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchFilter;