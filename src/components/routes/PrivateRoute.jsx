import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location =useLocation();
    const {user,loader}= useContext(AuthContext);
    if(loader){
        return   <Spinner animation="border" variant="danger" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

   
};

export default PrivateRoute;