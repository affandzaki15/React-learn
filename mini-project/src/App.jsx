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
  const [editingId, setEditingId] = useState(null);

  // function handle
  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || form.price === "" || form.stock === "") {
      alert("Semua wajib diisi");
      return;
    }

    if(editingId !== null){
      const updateProducts = products.map((product) => 
        product.id === editingId ? {
            ...product,
            name: form.name.trim(),
            price: Number(form.price),
            stock: Number(form.stock),
            category: form.category
        } : product
      
      );
      
      setProducts(updateProducts)
      setEditingId(null)
    } else {
          const newProduct = {
            id: Date.now(),
            name: form.name.trim(),
            price: Number(form.price),
            stock: Number(form.stock),
            category: form.category
          };
          setProducts((prev) => [...prev, newProduct])
      }

    setForm({
      name: "",
      price: "",
      stock: "",
      category: "Accessories",
    });
  }

  function handleDelete(id) {
    const updateProduct = products.filter((product) => product.id !== id);
    setProducts(updateProduct);
  }

  function handleEdit(product){
    setEditingId(product.id)
    setForm({
     name: product.name,
     price: product.price,
     stock: product.stock,
     category: product.category
    
    })
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

      <ProductForm form={form} setForm={setForm} onSubmit={handleSubmit} editingId={editingId} />

      <ProductList products={filteredProducts} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
}

export default App;
