export default function FilterBar() {
  const filters = ['Date', 'Category', 'Neighborhood', 'Free or Paid', 'Family-Friendly'];
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button key={filter} type="button" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
          {filter} (placeholder)
        </button>
      ))}
    </div>
  );
}
