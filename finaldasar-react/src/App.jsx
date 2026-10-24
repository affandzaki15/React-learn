import { useState } from "react";
import Header from "./components/header";
import initialProducts from "./data/data";
import Toolbar from "./components/ProductToolbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

import "./App.css";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "accessories",
  });
  const [editId, seteditId] = useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || form.price === "" || form.stock === "") {
      alert("Produk wajib diisi");
      return;
    }

    if(editId !== null){
      const updateProduct = products.map((product) => 
        product.id === editId ? {
            ...product,
            name: form.name.trim(),
            price: Number(form.price),
            stock: Number(form.stock),
            category: form.category
        } : product
      ) 

      setProducts(updateProduct)
      seteditId(null)
    } else {

      const inProduct = {
        id: Date.now(),
        name: form.name.trim(),
        price: Number(form.price),
        stock: Number(form.stock),
        category: form.category,
      };
  
      setProducts((prev)=> [...prev, inProduct]);
    }

    setForm({
      name: "",
      price: "",
      stock: "",
      category: "accessories",
    });
  }
  function handleDelete(id){
    const deleteProduct = products.filter(data => data.id !== id)
    setProducts(deleteProduct)
  }
  function handleEdit(product){
      seteditId(product.id)
      setForm({
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category
      })
  }
  const filteredProducts = products.filter((data) => {
    const mathSearch = data.name.toLowerCase().includes(search.toLowerCase());
    const mathFilter =
      filter === "all" ||
      (filter === "available" && data.stock > 0) ||
      (filter === "kosong" && data.stock === 0);

    return mathSearch && mathFilter;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Header />
        <Toolbar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <ProductForm form={form} setForm={setForm} onSubmit={handleSubmit} editId = {editId} />
        <ProductList products={filteredProducts} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </main>
  );
}

export default App;
