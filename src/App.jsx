import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import List from "./pages/List"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreateWoman from "./pages/CreateWoman"
import ProtectedRoutes from "./auth/ProtectedRoutes"


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="create-woman" element={<CreateWoman />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App