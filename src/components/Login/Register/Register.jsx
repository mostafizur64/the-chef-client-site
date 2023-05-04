import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success,setSuccess] = useState("");
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
       
        console.log(name, photo, email, password)
        
        
        // form.reset();

        setError('');
        setSuccess('');
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please added tow upper case number!!')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('please added two number !!');
            return;
        }
        else if (password.length < 6) {
            setError('please added at least 6 character in your password');
            return;
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user,name,photo)
                setSuccess('user create successfully');
                navigate('/');

               
            })
            .catch(error => {
                console.log(error)
            });
        const updateUserData = (user, name,photo) => {
            updateProfile(user, {
                displayName: name, 
                photoURL:photo
            }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
        }
        updateUserData(name,photo)
    }
    return (
        <div className='w-50 mx-auto mt-4 border border-info p-3 rounded-start'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo_url' placeholder="photo url" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Label>Already have an account? Please <Link to='/login'>Login</Link></Form.Label>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;