import { Navigate, Outlet } from 'react-router-dom';

const userLogged = () => {
    const user = localStorage.getItem('user');
    if(user){
        return user
    }else{
        return false
    }
}

const ProtectedRoutes = () => {
    const user = userLogged();
    if(!user){
        return <Navigate to="/" />
    }else{
        return <Outlet />
    }
}

export default ProtectedRoutes;