import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { UserContext } from "../auth/UserContext";
import { Link } from "react-router-dom";


const List = () => {

    const [women, setWomen] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
      const fetchWomen = async () => {
        try {
          const response = await fetch('https://66a43d6444aa637045839f45.mockapi.io/women');
          if (response.ok) {
            const womenData = await response.json();
            setWomen(womenData);
          } else {
            throw new Error('Failed to fetch women');
          }
        } catch (error) {
          throw new Error(error.message);
        }
      };
      fetchWomen();
    }, []);
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`https://66a43d6444aa637045839f45.mockapi.io/women/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setWomen(women.filter((woman) => woman.id !== id));
        } else {
          throw new Error('Failed to delete woman');
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    const filteredWomen = women.filter((woman) =>
      woman.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      woman.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      woman.nationality.toLowerCase().includes(searchTerm.toLowerCase()) 
      || woman.bio.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className='container-lg flex flex-col items-center justify-center bg-gray-200 gap-2 p-4'>
        <h1 className="text-3xl font-extrabold font-mono text-blue-800 underline mb-4">Women In History</h1>
        <div className="relative mb-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 pl-10 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-800" />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {filteredWomen.map((woman) => (
            <li key={woman.id} className="flex justify-center">
              <div className="bg-purple-200 p-4 border-dotted border-4 border-red-500 rounded-lg shadow-lg w-full">
                <p className="font-bold font-serif text-green-800">Name: <span className="font-normal">{woman.name}</span></p>
                <p className="font-bold font-serif text-green-800">Last Name: <span className="font-normal">{woman.lastName}</span></p>
                <p className="font-bold font-serif text-green-800">Nationality: <span className="font-normal">{woman.nationality}</span></p>
                <p className="font-bold font-serif text-green-800">Biography: <span className="font-normal">{woman.bio}</span></p>
                <img src={woman.photo} alt="photo" className="mt-2 w-full h-auto rounded-lg border-4 border-blue-800" />
                {user && (
                  <button
                    onClick={() => handleDelete(woman.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                  >
                    <FaTrashAlt />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        {user &&(
        <p className="p-2 border-4 border-red-500 rounded-full bg-purple-200 font-bold font-serif text-green-800 hover:bg-green-200">
        <Link to="/create-woman" className="">
          Crear tarjeta
        </Link>
      </p>
        )}
      </div>
    );
}

export default List