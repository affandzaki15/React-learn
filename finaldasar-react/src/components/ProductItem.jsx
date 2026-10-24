
function ProductItem({ data, onDelete, onEdit}) {
  const isAvailable = data.stock > 0;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-slate-900">
            {data.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {data.category}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
            isAvailable
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {isAvailable ? "Tersedia" : "Habis"}
        </span>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm text-slate-500">Harga produk</p>
        <p className="mt-1 text-xl font-bold text-slate-900">
          {Number(data.price).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}
        </p>

        <p className="mt-3 text-sm text-slate-600">
          Stok: <span className="font-semibold">{data.stock}</span> unit
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          onClick={()=> onEdit(data)}
        >
          Edit
        </button>

        <button
          type="button"
          className="flex-1 rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
          onClick={()=> onDelete(data.id)}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
