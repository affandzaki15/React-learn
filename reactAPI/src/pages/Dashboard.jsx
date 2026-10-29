import {Link} from "react-router"

const tasks = [
  { id: 1, title: "Belajar JavaScript" },
  { id: 2, title: "Belajar TypeScript" },
  { id: 3, title: "Belajar Node.js" },
];

function Dashboard(){

    return(
        <div>
            <h1>Dashboard</h1>
            <p>Selamat datang di task manager</p>
            <ul>
                {tasks.map((task)=> 
                    <li key={task.id}>
                        <Link to={`/tasks/${task.id}`} >
                        {task.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Dashboard