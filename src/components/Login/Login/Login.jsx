import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth,  } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { FaGoogle,FaGithub} from 'react-icons/fa';

const auth = getAuth();

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const { singIn, SingInWithGoogle,gitHubLogin } = useContext(AuthContext)
  
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (email && password) {
            singIn(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    navigate(from, { replace: true })

                })
                .catch(error => {
                   toast.error(error.message);
                })
        }
        else {
            setError('please provide a valid email and pass!')
        }
    }
    const handleWithGoogleLogin = () => {
        SingInWithGoogle().then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })


    }
    const gitHubHandler = () =>{
        gitHubLogin()
        .then(result=>{
          const user = result.user;
          console.log(user);
          navigate('/');
        })
        .catch(err=>{
          console.log(err.message)
        })
      }
    return (
        <div className='w-50 mx-auto mt-4 border border-info p-3 rounded-start '>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Label>Don't have and account? Please <Link to='/register'>Register</Link></Form.Label>
            </Form>
            <div className='text-danger d-flex justify-content-between'>
                <button onClick={handleWithGoogleLogin} className="btn btn-primary">
                <FaGoogle style={{ fontSize: '1rem me-2' }}></FaGoogle>
                     Login with Google
                    </button>
                <button onClick={gitHubHandler} className="btn btn-primary">
                <FaGithub style={{ fontSize: '1rem me-2' }}></FaGithub>
                     Login with Github
                    </button>
                <p className='text-danger'>{error}</p>
            </div>
            
        </div>
    );
};

export default Login;