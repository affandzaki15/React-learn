import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import TaskDetail from "./pages/TaskDetail";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/1" element={<TaskDetail />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
}

export default App;
