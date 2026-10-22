
function ProductItem({ data }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        {data.name}
      </h2>

      <p className="mb-1 text-sm text-gray-600">
        Harga: Rp {data.price.toLocaleString("id-ID")}
      </p>

      <p className="mb-1 text-sm text-gray-600">
        Stok: {data.stock}
      </p>

      <p className="text-sm text-gray-600">
        Kategori: {data.category}
      </p>

      <span
        className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
          data.stock > 0
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {data.stock > 0 ? "Tersedia" : "Stok Habis"}
      </span>
    </article>
  );
}

export default ProductItem;
