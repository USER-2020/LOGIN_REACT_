import React, { useEffect, useState } from 'react'
import { loginService } from '../../services/Auth';

const AuthComponent = () => {
    const [email, setEmail] = useState('juanfernandozuluaga2014310@gmail.com');
    const [password, setPassword] = useState('123456789');

    const handleLogin = async () => {
        try {
            const response = await loginService({ email, password });
            // Handle successful login (e.g., navigate to a different page)
            console.log('Login successful:', response.data);
        } catch (error) {
            // Handle login errors (e.g., display an error message)
            console.error('Login error:', error);
        }
    };


    const handleLogin2 = () => {
        loginService({ email, password })
            .then((response) => {
                // Handle successful login (e.g., navigate to a different page)
                console.log('Login successful:', response.data);
            })
            .catch((error) => {
                // Handle login errors (e.g., display an error message)
                console.error('Login error:', error);
            });
    };


    useEffect(() => {
        handleLogin2();
    }, []);

    return (
        <div>
            Aca va el formulario de login
        </div>
    )
}

export default AuthComponent
