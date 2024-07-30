// CircularIconAnimation.js
import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import "./Technologytwo.css"

const technologies = [
  { name: 'React', logo: 'image1.svg' },
  { name: 'Node.js', logo: 'image2.svg' },
  { name: 'GraphQL', logo: 'image3.svg' },
  { name: 'React', logo: 'image4.svg' },
  { name: 'Node.js', logo: 'image1.svg' },
  { name: 'GraphQL', logo: 'image2.svg' },
  // Add more technologies as needed
];

const Technologytwo = () => {
 
  const moves = [
    { id: 1, name: 'Move 1', logo: 'image1.svg' },
    { id: 2, name: 'Move 2', logo: 'image2.svg' },
    { id: 3, name: 'Move 3', logo: 'image3.svg' },
    { id: 4, name: 'Move 4', logo: 'image4.svg' },
    { id: 5, name: 'Move 5', logo: 'image1.svg' },
  ];

  return (
    <div className="circle-moves">
      <div className="circle">
        {moves.map((move, index) => (
          <div
            key={move.id}
            className="move"
            style={{
              transform: `rotate(${index * 72}deg)`,
              backgroundImage: `url(${move.logo})`,
            }}
          >
            <span className="move-name">{move.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologytwo;
