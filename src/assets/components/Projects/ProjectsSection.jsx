import React from 'react';
import './ProjectsSection.css';
import towD from '../../images/Projects/2d.jpg';
import threeD from '../../images/Projects/3d.jpg';
import supervision from '../../images/Projects/supervision.jpg';
import Project from './Project';

export default function ProjectsSection(){
    const items = [
        {
            src: towD,
            title: '2D Design',
        },
        {
            src: threeD,
            title: '3D Design',
        },
        {
            src: supervision,
            title: 'Execution Supervision',
        },
    ];
    return(
        <>
        <h2 className="title-Services">Our Projects</h2>
      <p className="subtitle-Services"></p>
      
      <div className="projects">
            
            {items.map((item, index) => (
               <Project key={index} src={item.src} title={item.title} />
            ))}
        </div>
        </>
        
    )
}