import { useNavigate } from "react-router"

function Settings(){
    const navigate = useNavigate()
    return(
        <div>
            <h2>Settings</h2>
            <p>your service in here</p>
            <button onClick={()=>navigate("/")}>Back to Dashboard</button>
        </div>
    )
}

export default Settings