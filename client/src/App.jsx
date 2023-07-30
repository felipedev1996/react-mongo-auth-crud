import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";


function App() {
  return (
   <AuthProvider>
    <TaskProvider>
    <BrowserRouter>
    <main className="container mx-auto px-10 ">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/login" element={<h1><LoginPage/></h1>} />  
        <Route path="/register" element={<h1><RegisterPage/></h1>} />  
        {/* Rutas para usuarios logeados */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/add-task" element={<TaskFormPage/>} />
          <Route path="/tasks:id" element={<TaskFormPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          
        </Route> 
      </Routes>
    </main>
   
    </BrowserRouter>
    </TaskProvider>
   </AuthProvider>
  )
}

export default App;
