import * as React from 'react';
// import CardGallery from './Components/CardGallery';
import Card from './Components/Card'
// import {Exerience} from './Interfaces'
import experiences from './Components/Assets/experiences.json'

const Experiences = () => {
    // const data = [{
    //     name: "Mobile App Developer @ Hemut", 
    //     date: "Dec 2024 - Present", 
    //     tags: ["React Native", "Figma"], 
    //     summary: "Led the front-end development of mobile prototype centering assisting fleet drivers in routing, updating status, and vocal commands for fleet management startup", 
    //     description: "Created mobile prototype centering assisting fleet drivers in routing, updating status, and vocal commands for fleet management startup",
    //     image_path: "/logo_hemut.png"
    // }];
    return ( 
        <>
        <div className='title' id="Experiences">Experiences</div>
        <div className='cardGallery'>
        {experiences.map((exp) => <Card data={exp}/>)}
        </div>
        </>
    );
}
 
export default Experiences;