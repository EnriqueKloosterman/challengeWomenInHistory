import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://66a4fc495dc27a3c190a5943.mockapi.io/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      setFormData({
        name: "",
        password: "",
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
      throw new Error("Failed to create user");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col  justify-center bg-gray-200 p-4 border-dotted border-4 border-red-500 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold font-mono text-blue-800 underline mb-4">
          Registrarse
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
          />
          <button
            type="submit"
            className="p-2 border-4 border-red-500 rounded-full bg-purple-200 font-bold font-serif text-green-800 hover:bg-green-200"
          >
            Registrarse
          </button>
          <p className="font-bold font-serif text-center text-blue-500 hover:underline">
            <Link to="/" className="">
              volver al inicio
            </Link>
          </p>
          <p className="text-sm font-bold font-serif text-center text-blue-500 hover:underline">
            <Link to="/login" className="">
              Iniciar sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
