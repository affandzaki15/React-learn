import {useState} from 'react'
const products = [
  { id: 1, name: "Keyboard", price: 350000, inStock: true },
  { id: 2, name: "Mouse", price: 150000, inStock: true },
  { id: 3, name: "Monitor", price: 1800000, inStock: false },
  { id: 4, name: "Headset", price: 250000, inStock: true },
];
import "./App.css";
function App() {
  const [inFilt, setInfilt] = useState(true)
  return (
    <main className="app">
      <h1>React List Product</h1>
      <button onClick={()=> setInfilt(true)}>
        Produk Tersedia
      </button>
      <button onClick={()=> setInfilt(false)}>
        Semua Produk
      </button>
      <ul>
      {products
      .filter(product => !inFilt || product.inStock)
      .map(product=>{
      return <li key={product.id}>
        <h3>{product.name}</h3>
        <p>Harga: Rp{product.price.toLocaleString("id-ID")}</p>
        <p>{product.inStock ? "Tersedia":"Habis"}</p>
        </li>
      })}
      </ul>
    </main>
  );
}

export default App;
