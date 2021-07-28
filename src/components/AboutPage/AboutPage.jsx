import React from 'react';

function AboutPage() {
  return (
    <div className="container text-center">
      <div>
        <h1>About</h1>
        <h2>Technologies Used</h2>
        <p>React.js - node.js - express.js - javascript - Redux - Redux-Saga
          - Postgresql - Material UI - HTML - CSS - Howler.js - Tonal.js</p>
        <h2>Challenges</h2>
        <p>Studying documentation and implementing Tonal.js to get the notes/intervals for certain chord types and
          using Howler.js to play the notes. The documentation for Howler.js on how to use sprites, which chop up an audio file 
          and stores them as individual sounds, was very sparse so I had to peice together what I could find to solve that problem.
        </p>
        <h2>Future Additions</h2>
        <p>Different Rhythms and lengths for chords</p>
        <p>Enhancing the library to include microtonal pitches/notes/chords for advanced students</p>
      </div>
    </div>
  );
}

export default AboutPage;
