import React from 'react';
import jsPDF from 'jspdf';
import { Button, Card } from 'react-bootstrap';

const Blog = () => {
    const pdfGenaRate = () =>{
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.text(60, 60, 'name')
        doc.save('a.pdf')
      }
    
    return (
        <>
        <Button onClick={pdfGenaRate}>Download</Button>
            <Card className="text-center mt-4">
                <Card.Header>1. Tell us the differences between uncontrolled and controlled components</Card.Header>
                <Card.Body>
                    <Card.Title>In React, controlled components refer to components that have their state and behavior controlled by the parent component.
                        These components rely on props passed down from the parent component to update their state and behavior.
                        Uncontrolled components refer to components that manage their own state internally</Card.Title>

                </Card.Body>
            </Card>

            <Card className="text-center mt-4">
                <Card.Header>2.How to validate React props using PropTypes</Card.Header>
                <Card.Body>
                    <Card.Title>PropTypes.any: The prop can be of any data type
                        PropTypes.bool: The prop should be a Boolean
                        PropTypes.number: The prop should be a number
                        PropTypes.string: The prop should be a string
                        PropTypes.func: The prop should be a function
                        PropTypes.array: The prop should be an array
                        PropTypes.object: The prop should be an object
                        PropTypes.symbol: The prop should be a symbol</Card.Title>

                </Card.Body>
            </Card>

            <Card className="text-center mt-4">
                <Card.Header>3. Tell us the difference between nodejs and express js</Card.Header>
                <Card.Body>
                    <Card.Title>Express is a minimal and flexible node. js web application framework, providing a robust set of features
                        for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed
                        as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications</Card.Title>

                </Card.Body>
            </Card>

            <Card className="text-center mt-4">
                <Card.Header>4. What is a custom hook, and why will you create a custom hook?
                </Card.Header>
                <Card.Body>
                    <Card.Title>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes
                        the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a
                        custom hook does not need to be rendered again and again while rendering the whole code</Card.Title>

                </Card.Body>
            </Card>
        </>
    );
};

export default Blog;