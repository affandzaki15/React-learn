import ProductItem from "./ProductItem";

function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) {
    return (

      <section>
        <h2>Daftar Produk</h2>
        <p>Tidak ada produk yang ditemukan</p>
        <p>Coba ubah pencarian atau filter kamu</p>
      </section>
    )
  }
  return (
    <section>
        <h2>Daftar Produk</h2>
      {products.map((product) => (
        <ProductItem key={product.id} data={product} onDelete={onDelete} onEdit={onEdit} />
      ))}
      
    </section>
  );
}

export default ProductList;
