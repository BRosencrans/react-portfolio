import React from 'react';

import { v4 as uuidv4 } from 'uuid';


const works = [

    {
        id: uuidv4(),
        title: "Placeholder 1",
        image: "http://placekitten.com/800/800",
        imgdesc: "A placeholder kitten",
        description: "This is only a placeholder, if you click the link you'll get sent to a picture of a kitten.",
        link: "http://placekitten.com/800/800",
    },
    {
        id: uuidv4(),
        title: "Placeholder 2",
        image: "http://placekitten.com/800/800",
        imgdesc: "A placeholder kitten",
        description: "This is only a placeholder, if you click the link you'll get sent to a picture of a kitten.",
        link: "http://placekitten.com/800/800",
    },
    {
        id: uuidv4(),
        title: "Placeholder 3",
        image: "http://placekitten.com/800/800",
        imgdesc: "A placeholder kitten",
        description: "This is only a placeholder, if you click the link you'll get sent to a picture of a kitten.",
        link: "http://placekitten.com/800/800",
    },
    {
        id: uuidv4(),
        title: "Placeholder 4",
        image: "http://placekitten.com/800/800",
        imgdesc: "A placeholder kitten",
        description: "This is only a placeholder, if you click the link you'll get sent to a picture of a kitten.",
        link: "http://placekitten.com/800/800",
    },

]
function Portfolio() {
    return (
        <main className=' text-center row justify-content-center'>
            {works.map((element) => {
                return (
                    <section key={element.id} className='col-sm-12 col-md-6 proj-card'>
                            <div className='text-center col-12 card-title'>
                                <h5>{element.title}</h5>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href={element.link}>
                            <div className=' row col-12'>
                                <div className='col-1'></div>
                                <img alt={element.imgdesc} src={element.image} className='text-center col-10' />
                                <div className='col-1'></div>
                            </div>
                            </a>
                            <br />
                            <div className=' row col-12'>
                                <div className='row col-1'></div>
                                <div className='row col-10'>
                                    <div className='col-1'></div>
                                    <div className='col-10 text-start'>
                                        <p>
                                        {element.description}
                                        </p>
                                    </div>
                                    
                                </div>
                                

                            </div>
                        
                    </section>
                )
            })}
        </main>
    )
}
export default Portfolio;