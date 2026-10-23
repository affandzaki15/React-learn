function ProductForm({form, setForm, onSubmit, editingId}){
    return(
        <form onSubmit={onSubmit}>
        <h2>Tambah Produk</h2>
        <input
          type="text"
          placeholder="Nama Produk"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />

        <input
          type="number"
          placeholder="Masukkan harga"
          value={form.price}
          onChange={(event) => setForm({ ...form, price: event.target.value })}
        />

        <input
        type="number"
        placeholder="masukkan stok"
        value={form.stock}
        onChange={(event) => setForm({...form, stock: event.target.value})}
        />

        <select
          value={form.category}
          onChange={(event)=> setForm({...form, category:event.target.value})}
        >
          <option value="Accessoris">Accessoris</option>
          <option value="Electronics">Electronics</option>

        </select>

        <button type="submit">{editingId !== null ? "simpan Perubahan":"tambah produk"}</button>
      </form>
    )
}

export default ProductForm