import React, { useEffect, useState } from 'react';
import SingleChefCart from '../SingleChefCart/SingleChefCart';
import { Card, Col, Row } from 'react-bootstrap';


const Chefs = () => {
  const [chefs, setChef] = useState([]);
  useEffect(() => {
    fetch(`https://the-chef-server-project-mostafizur64.vercel.app/chef`)
      .then(res => res.json())
      .then(data => setChef(data))

  }, [])


  return (
      
    <Row xs={1} lg={3} className="g-4 mt-4">
    {chefs.map((chef) => (
      <Col>
       <SingleChefCart key={chef.id} chef={chef}></SingleChefCart>
      </Col>
    ))}
  </Row>
  )
};

export default Chefs;