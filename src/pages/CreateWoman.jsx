import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


const CreateWoman = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        nationality: "",
        bio: "",
        photo: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData,
            [name]: value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://66a43d6444aa637045839f45.mockapi.io/women", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log("Woman created successfully");
                setFormData({
                    name: "",
                    lastName: "",
                    nationality: "",
                    bio: "",
                    photo: ""
                });
                navigate("/")
            } else {
                console.error("Failed to create woman");
            }
        } catch (error) {
            console.error("Error creating woman:", error);
        }

    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-300">
            <div className="flex flex-col justify-center bg-gray-200 p-4 border-dotted border-4 border-red-500 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <h1 className="text-3xl font-extrabold font-mono text-blue-800 underline mb-4">
                    Nueva Mujer
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
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Apellido"
                        className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
                    />
                    <input 
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="nacionaliad"
                        className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
                    />
                    <textarea
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Biografia"
                        className="p-2 border-4 border-blue-800 rounded-lg w-full bg-yellow-200 font-serif"
                    />
                    <input 
                        type="text"
                        name="photo"
                        value={formData.photo}
                        onChange={handleChange}
                        placeholder="imagen"
                        className="p-2 border-4 border-blue-800 rounded-full w-full bg-yellow-200 font-serif"
                    />
                    <button 
                        type="submit"
                        className="p-2 border-4 border-red-500 rounded-full bg-purple-200 font-bold font-serif text-green-800 hover:bg-green-200"
                    >
                        Crear
                    </button>
                   
                </form>
                <p className="font-bold font-serif text-center text-blue-500 hover:underline mt-4">
                        <Link to="/" className="">
                            volver al inicio
                        </Link>
                    </p> 

            </div>

        </div>
    )
}

export default CreateWoman