import axios from "axios";
import { useState, useEffect } from "react";
import { taskSchema } from "../schemas/taskSchemas";

function GetTask() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editError, setEditError] = useState("");

//   GET

  useEffect(() => {
    async function inTask() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
        );
        setTasks(response.data.slice(0, 10));
      } catch (error) {
        setError("Gagal");
      } finally {
        setIsLoading(false);
      }
    }
    inTask();
  }, []);

  if (isLoading) return <p>Memuat data...</p>;
  if (error) return <p>{error}</p>;

// POST

  async function handleSubmit(event) {
    event.preventDefault();

    const result = taskSchema.safeParse({ title });

    if (!result.success) {
      const fieldError = result.error.issues[0].message;
      setValidationError(fieldError);
      return;
    }
    setValidationError("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        result.data,
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      setError("Gagal Menambahkan");
    } finally {
      setIsSubmitting(false);
    }

    setTitle("");
    setValidationError("");
  }

//   EDIT

  function handleEdit(task){
    setEditingId(task.id)
    setTitle(task.title)
    setEditError("")
  }

// UPDATE PATCH
  async function handleUpdate(event) {
    event.preventDefault()

   const result = taskSchema.safeParse({ title });

if (!result.success) {
  setValidationError(result.error.issues[0].message);
  return;
}

setValidationError("");

    
    
setIsSubmitting(true)
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${editingId}`,
        result.data,
    );
    setTasks((prev)=>(
       prev.map((task)=>
            task.id === editingId ? {...task
                , ...response.data
            } : task
        )
    ))
    setTitle("")
    setEditingId(null)
    setValidationError("")
} catch (error) {
      setEditError("Gagal edit");
    } finally {
      setIsSubmitting(false);
    }


}

  return (
    <div>
      <h1>Daftar Judul</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <form onSubmit={editingId !== null ? handleUpdate : handleSubmit}>
        <input value={title} onChange={(task) => setTitle(task.target.value)} />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Menyimpan" : editingId !== null ? "simpan perubahan" : "tambah task"}
        </button>
        {validationError && <p>{validationError}</p>}
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              type="button"
            //   disabled={editingId === task.id}
              onClick={() => handleEdit(task)}
            >
              {editingId === task.id ? "update.." : "edit"}
            </button>
            {editError && <p>{editError}</p>}
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default GetTask;
