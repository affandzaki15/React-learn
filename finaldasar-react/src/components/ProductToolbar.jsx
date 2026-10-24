
function Toolbar({ search, setSearch, filter, setFilter }) {
  return (
    <section className="mb-6 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="flex-1">
        <input
          placeholder="Cari nama barang..."
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Filter */}
      <div className="w-full sm:w-52">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all">Semua Produk</option>
          <option value="available">Stok Tersedia</option>
          <option value="kosong">Stok Habis</option>
        </select>
      </div>
    </section>
  );
}

export default Toolbar;
