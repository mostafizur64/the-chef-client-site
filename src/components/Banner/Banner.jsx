import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel className='mt-4'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-psd/cooking-courses-facebook-cover-banner-template_131196-160.jpg?w=826"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-design-chef-career-sale-banner_23-2149925254.jpg?w=900&t=st=1683178910~exp=1683179510~hmac=f7f7b4e557cd8bae1cf7b53d85c4b66446440b311638c521fa95d59ba2ef3e79"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-design-chef-cooking-facebook-template_23-2149949634.jpg?w=826&t=st=1683179118~exp=1683179718~hmac=610a0b4d56497e388af880556051461eee55ab655670bc54294f587c7f1e4df1"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;