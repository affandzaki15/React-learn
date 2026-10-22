import ProductItem from "./ProductItem";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p>Produk tidak ditemukan.</p>;
  }
  return (
    <section>
        <h2>Daftar Produk</h2>
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </section>
  );
}

export default ProductList;
