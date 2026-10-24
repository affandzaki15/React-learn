import { useState, useEffect } from 'react'
import axios from "axios";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  async function getData(){
    try{
      const response = await axios.get("https://fakestoreapi.com/products")
     
      const ambilData = response.data
        setProducts(ambilData)
      } catch (error){
        setError(error.message)
        
      } finally{
      setLoading(false)

    }
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <section>
      <h1>Product Dashboard</h1>
      
        {loading && <p>Loading Products...</p>}
        {error && <p>{error}</p>}
        {!loading && !error &&(
          <ol>
            {products.map((product)=>(
              <li key={product.id}>
                {product.title} - {product.price}
              </li>
            ))}
          </ol>
        )}
        
    </section>

  )
}

export default App
