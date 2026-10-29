import { useParams } from "react-router";

const tasks = [
  { id: 1, title: "Belajar JavaScript" },
  { id: 2, title: "Belajar TypeScript" },
  { id: 3, title: "Belajar Node.js" },
];
function TaskDetail() {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id) )
  if(!task){
      return <p>Task tidak ditemukan</p>
  } 
  return (
    <div>
      <h2>{task.title}</h2>
      <p>Task ID: {id}</p>
      <p>Task berhasil ditemukan</p>
    </div>
  );
}

export default TaskDetail;
