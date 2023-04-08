import React from 'react';
import LandingImage from '../assets/Learning-bro.png';
import '../styles/LandingPage.css';

function LandingPage() {
    return (
        <div className='landingPageDiv'>
            <h1 className='titleLanding'>Brain Box</h1>
            <div className='imageAndDesc'>
                <div className="imageLanding"><img src={LandingImage} alt="Failed to load img" /></div>
                <div className="rightSectLanding">
                    <div className='descriptionLanding'>
                        <p>Organize your study material like a pro.</p>
                        <br />
                        <p>Save all your study material links in a defined way.</p>
                    </div>
                    <div className="login-signup">
                        <div className="login"><button className='buttonLanding'>Login</button></div>
                        <div className="signup"><button className='buttonLanding'>Sign Up</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;