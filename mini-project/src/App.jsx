import { useState } from "react";
import initialProducts from "./data/products";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductToolbar from "./components/ProductToolbar";
import "./App.css";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "Accessories",
  });

  // function handle
  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || form.price === "" || form.stock === "") {
      alert("Semua wajib diisi");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: form.name.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
      category: form.category,
    };

    setProducts([...products, newProduct]);

    setForm({
      name: "",
      price: "",
      stock: "",
      category: "Accessories",
    });
  }

  const filteredProducts = products.filter((data) => {
    const matchSearch = data.name.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      (filter === "available" && data.stock > 0) ||
      (filter === "out" && data.stock === 0);

    return matchSearch && matchFilter;
  });

  return (
    <>
      <Header total={products.length} />

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ProductForm form={form} setForm={setForm} onSubmit={handleSubmit} />

      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
