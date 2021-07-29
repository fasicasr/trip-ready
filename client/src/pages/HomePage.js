import React, { useState } from 'react';
import background from '../assets/images/landing-page-image.jpg';

const HomePage = () => {
    return (
        <div>
            <img src={background} alt='background' style={{ "width": "100vw", "opacity": "0.65", "zIndex": "3", "position": "absolute", "backgroundPosition": "50% 50%", "backgroundSize": "cover" }} />
            <div style={{"height":"100vh", "width":"100vw"}}>
                <h1 className='border border-2' style={{"padding": "50px", "width":"500px","margin":"auto"}}>Trip Ready</h1>
            </div>
        </div>
    )
}

export default HomePage;