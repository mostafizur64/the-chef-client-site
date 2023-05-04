import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const chefRecipes = useLoaderData();
    const { chef_picture, chef_name, short_bio, likes, years_of_experience, num_recipes } = chefRecipes;




    console.log(chefRecipes);
    return (
        <Container>
            <Card className="text-center d-flex mt-4">
                <Card.Img variant="top" className='w-50 mx-auto mt-4 rounded' src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card className='h-50 mx-auto'>
                        {short_bio}

                    </Card>
                    <Card.Text>
                        <p>Likes:{likes}</p>
                        <p>Recipes:{num_recipes}</p>
                        <p>Experience:{years_of_experience}</p>
                    </Card.Text>
                        <Card.Title>Recipes</Card.Title>
                    <Card.Text className='d-flex justify-content-between'>
                        <p className="text-white rounded p-2 bg-info">Japanese</p>
                        <p className="text-white rounded p-2 bg-info">Chinese</p>
                        <p className="text-white rounded p-2 bg-info">Mexican</p>
                        <p className="text-white rounded p-2 bg-info">Korean</p>
                        <p className="text-white rounded p-2 bg-info">American</p>
                        <p className="text-white rounded p-2 bg-info">French</p>
                        <p className="text-white rounded p-2 bg-info">Thai</p>
                        <p className="text-white rounded p-2 bg-info">Italian</p>
                        <p className="text-white rounded p-2 bg-info">Greek</p>
                        <p className="text-white rounded p-2 bg-info">Vietnamese</p>
                        <p className="text-white rounded p-2 bg-info">Spanish</p>
                        <p className="text-white rounded p-2 bg-info">Eastern</p>
                        <p className="text-white rounded p-2 bg-info">Vegetarian</p>
                        
                        









                    </Card.Text>
                    <Link to='/'> <Button variant="primary">Go Back</Button></Link>
                </Card.Body>

            </Card>
        </Container>
    );
};

export default ChefRecipes;