function ProductToolbar({ search, setSearch, filter, setFilter}){
    return(
        <section>
            <input
        type="text"
        placeholder="Cari Produk"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all">Semua</option>
        <option value="available">Tersedia</option>
        <option value="out">Habis</option>
      </select>
        </section>
    )
}

export default ProductToolbar