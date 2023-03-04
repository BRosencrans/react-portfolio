import React from 'react';

function About() {
    return (
        <main className='text-center row justify-content-center'>
            <h3>About Me!</h3>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='about-text text-start'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae..</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae.</p>
                        <br/>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </main>
    )
}

export default About;