import {useState, useEffect} from "react"

function App(){
  const [users, setUsers] = useState([])
  const [loading, setLoading]  = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    async function handleApi(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
          throw new Error("Gagal ditemukan")
        }
        const ambil = await response.json()
        setUsers(ambil)
        
      } catch(error){
        setError(error.message)
      } finally{
        setLoading(false)

      }
    }
    handleApi()
  }, [])

  if(loading) return <p>Memuat.....</p>
  if (error) return <p>error: {error}</p>
 

  return(
  <main>

    <h1>User directory</h1>

    {users.map((user)=>(
     <article key={user.id}>
         <h3>{user.name}</h3>
         <p>{user.email}</p>
     </article>
    ))}
  </main>

  )
  

}

export default App