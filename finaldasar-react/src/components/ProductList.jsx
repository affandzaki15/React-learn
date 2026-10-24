
import ProductItem from "./ProductItem";

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return (
      <section className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-slate-800">
          Data tidak ditemukan
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Belum ada produk yang tersedia. Tambahkan produk untuk mulai mengelola stok.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-5 mt-2 text-center text-xl font-semibold tracking-tight text-slate-900">
        Daftar Produk
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((data) => (
          <ProductItem key={data.id} data={data} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
