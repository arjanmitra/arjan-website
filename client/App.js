import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      <div>
        <br />
        <br />
        <h1>
          &#128075;
          <br />
          I'm glad you're here.
        </h1>
        <h2>In a hurry?</h2>
        <a
          href="public/assets/Arjan Mitra - SE Resume (Dec2021).pdf"
          target="_blank"
        >
          <button id="cv">cv</button>
        </a>
        <br />
        <a href="https://github.com/arjanmitra" target="_blank">
          <button id="github">
            <img src="public/assets/GitHub-Mark/PNG/GitHub-Mark-32px.png" />
          </button>
        </a>
        <br />
        <a href="https://www.instagram.com/arjanmitra.tv/" target="_blank">
          <button id="insta">
            <img src="public/assets/instalogo.png" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default App;
