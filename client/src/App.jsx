import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />  
        <Route path="/login" element={<h1><LoginPage/></h1>} />  
        <Route path="/register" element={<h1><RegisterPage/></h1>} />  
        <Route path="/tasks" element={<h1>tasks</h1>} />  
        <Route path="/add-task" element={<h1>add-task</h1>} />  
        <Route path="/tasks:id" element={<h1>tasks:id</h1>} />  
        <Route path="/profile" element={<h1>profile</h1>} />  
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App;
