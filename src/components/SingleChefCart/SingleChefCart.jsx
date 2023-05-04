import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SingleChefCart = ({ chef }) => {
    const { id, chef_picture, chef_name, likes, num_recipes, years_of_experience } = chef;

    const fireHotToast =()=>{
        toast.success('Here is your toast.')
    }
    return (
        <Card>
            <Card.Img variant="top" src={chef_picture} />
            <Card.Body className='text-center'>
                <Card.Title >{chef_name}</Card.Title>
                <Card.Text className='text-gray'>
                    Years of experience {years_of_experience}
                </Card.Text>
                <Card.Text className='text-gray'>
                    likes {likes}
                </Card.Text>
                <Card.Text className='text-gray'>
                    Numbers of recipes {num_recipes}
                </Card.Text>
                <Card.Text className='d-flex justify-content-between'>
                    <Card.Text>   <Link to={`/chefRecipes/${id}`}><Button variant="primary">View Recipes</Button></Link></Card.Text>
                    <Card.Text>

                    <Button onClick={fireHotToast} variant="primary">Favorite button</Button>
                    </Card.Text>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleChefCart;