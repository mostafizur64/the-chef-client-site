
import React from 'react';
import { FaUserCircle,FaFacebook,FaGoogle,FaGithub,FaTwitter} from 'react-icons/fa';
const Footer = () => {
    return ( 
        <div className=' mx-auto bg-dark text-white rounded mt-4'>
          
          <div className="d-flex justify-content-between p-4 ">
          <div>
                <h2>Social Media</h2>

            
              <div className='d-flex justify-content-between mt-4'>
                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                <FaFacebook style={{ fontSize: '2rem' }}></FaFacebook>
                <FaGoogle style={{ fontSize: '2rem' }}></FaGoogle>
                <FaGithub style={{ fontSize: '2rem' }}></FaGithub>
               
                    
               
              </div>
            </div>
            <div>
                <h2>Food Valley</h2>
                <p>Resources</p>
                <p> About Us</p>
                <p>Contact</p>
                <p>Blog</p>
            </div>
            <div>
                <h2>Prouduct</h2>

                <p>Windframe</p>
                <p>Loop</p>
                <p>Contrast</p>

            </div>
            <div>
                <h2>Help</h2>
                <p>Sing In</p>
                <p>Sing Up</p>
            </div>
          </div>
           </div>
        
    );
};

export default Footer;

