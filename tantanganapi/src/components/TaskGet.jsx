import axios from "axios"
import { useState, useEffect } from "react"

function TaskGet(){
    const[tasks, setTasks] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [error, setError] = useState("")
    
   useEffect(()=>{
    async function fetchTask(){
        try{
            const response = await axios.get( "https://jsonplaceholder.typicode.com/todos")
            setTasks(response.data.slice(0,10))
        } catch (error){
            setError("gagal")
        } finally{
            setisLoading(false)
        }
    }
    fetchTask()
   }, [])
    
   if(isloading) return <p>Loading...</p>
   if(error) return <p>{error}</p>
    return(
        <div>
            <h1>My Tasks</h1>
            <ul>
                {tasks.map((task)=>(

                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TaskGet