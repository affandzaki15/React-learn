import { useState } from "react";
import { taskSchema } from "../schemas/taskSchema";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [errors, seterrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Belajar React" },
    { id: 2, title: "Belajar TypeScript" },
    { id: 3, title: "Belajar API" },
  ]);
  const [deletingId, setDeletingId] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const task = {
      title,
      description,
      priority,
    };

    const result = taskSchema.safeParse(task);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        fieldErrors[field] = issue.message;
      });

      seterrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        result.data,
      );

      console.log("Data berhasil dikirim:", response.data);
      setSuccessMessage("Task berhasil dibuat!");
    } catch (error) {
      setApiError("Gagal membuat task. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log("Task berhasil dihapus");
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.log("Gagal menghapus:", error.message);
    } finally {
      setDeletingId(null);
    }
  }

  async function handleEdit(id) {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          title: "Belajar TypeScript",
        },
      );

      setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: response.data.title }
          : task
      )
    );

      console.log("Task berhasil diupdate:", response.data);
    } catch (error) {
      console.error("Gagal mengupdate task:", error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          placeholder="Masukkan judul"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="desc"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && <p>{errors.description}</p>}
      </div>
      <div>
        <label htmlFor="priority">priority</label>
        <select
          id="prio"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Menyimpan..." : "Create Task"}
      </button>
      <button type="button" onClick={() => handleDelete(1)}>
        Delete Task
      </button>
      {apiError && <p>{apiError}</p>}
      {successMessage && <p>{successMessage}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button type="button" onClick={() => handleEdit(task.id)}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => handleDelete(task.id)}
              disabled={deletingId === task.id}
            >
              {deletingId === task.id ? "Deleting..." : "delete"}
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default TaskForm;
