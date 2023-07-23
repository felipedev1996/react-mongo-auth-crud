import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
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
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App;
