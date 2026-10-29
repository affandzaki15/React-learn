import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import TaskDetail from "./pages/TaskDetail";
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <main>
      <Link to="/">Dashboard</Link>
      <Link to="/tasks/:id">Task</Link>
      <Link to="/settings">Settings</Link>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<h1>404 - Page not Found</h1>} />
      </Routes>
    </main>
  );
}

export default App;
