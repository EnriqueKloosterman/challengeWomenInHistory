import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../auth/UserContext';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://66a4fc495dc27a3c190a5943.mockapi.io/users`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log('Error');
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  fetchUsers();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const user = users.find((user) => user.name === formData.name && user.password === formData.password);
    if (user) {
      handleLogin(user);
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }




  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 gap-4">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-4 border-dotted border-4 border-red-500 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold font-mono text-blue-800 underline mb-4">
          Iniciar sesión
        </h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif mb-4"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif mb-4"
        />
        <button
          type="submit"
          className="p-2 border-4 border-red-500 rounded-full bg-purple-200 font-bold font-serif text-green-800 hover:bg-green-200"
        >
          Iniciar sesión
        </button>
        <p className="font-bold font-serif text-center text-blue-500 hover:underline mt-4">
            <Link to="/" className="">
              volver al inicio
            </Link>
          </p>
          <p className="text-sm font-bold font-serif text-center text-blue-500 hover:underline mt-4">
            <Link to="/register" className="">
              Registrarse
            </Link>
          </p>
      </form>
    </div>
  );
};

export default Login;
