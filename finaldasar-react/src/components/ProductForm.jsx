
function ProductForm({ form, setForm, onSubmit, editId }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Tambah Produk
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Masukkan informasi produk yang ingin disimpan.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Nama Barang
        </label>
        <input
          type="text"
          value={form.name}
          placeholder="Masukkan nama barang"
          onChange={(event) =>
            setForm({ ...form, name: event.target.value })
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Harga (Rp)
        </label>
        <input
          type="number"
          min="0"
          value={form.price}
          placeholder="Masukkan harga"
          onChange={(event) =>
            setForm({ ...form, price: event.target.value })
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Stok
        </label>
        <input
          type="number"
          min="0"
          value={form.stock}
          placeholder="Masukkan jumlah stok"
          onChange={(event) =>
            setForm({ ...form, stock: event.target.value })
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Kategori
        </label>
        <select
          value={form.category}
          onChange={(event) =>
            setForm({ ...form, category: event.target.value })
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      >
        {editId !== null ? "Simpan Perubahan" : "Tambah produk"}
      </button>
    </form>
  );
}

export default ProductForm;
