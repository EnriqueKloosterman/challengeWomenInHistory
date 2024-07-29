import { FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../auth/UserContext';

function NavBar() {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <nav className="bg-gray-800 p-4 border-b-4 border-blue-800 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex gap-4">
                    {!user ? (
                        <>
                            <li className="flex items-center gap-1 text-yellow-300 hover:text-white">
                                <FaSignInAlt />
                                <Link to="/login" className="font-serif">Ingresar</Link>
                            </li>
                            <li className="flex items-center gap-1 text-yellow-300 hover:text-white">
                                <FaUserPlus />
                                <Link to="/register" className="font-serif">Registrarse</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="flex items-center gap-1 text-yellow-300">
                                <FaUser />
                                <span className="font-serif">{user.name}</span>
                            </li>
                            <li className="flex items-center gap-1 text-yellow-300 hover:text-white">
                                <FaSignOutAlt />
                                <button onClick={handleLogout} className="font-serif">Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
