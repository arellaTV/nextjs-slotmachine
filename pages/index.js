import React, { useState } from 'react';
import axios from 'axios';
import Head from '../components/head';
import symbolDictionary from './symbolDictionary'

export default () => {
  const [spinResult, setSpinResult] = useState("");
  const [threeInARow, setThreeInARow] = useState(false);

  function spin() {
    console.log('spinning');
    axios.get('/api/spin')
      .then(function (response) {
        // handle success
        setSpinResult(response?.data?.results);
        setThreeInARow(response?.data?.threeInARow);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setSpinResult("");
        setThreeInARow(false);
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function getSpriteOffset(letter) {
    console.log(symbolDictionary[letter]);
    return symbolDictionary[letter].offset;
  }

  return (
    <div>
      <Head title="Home" />
      <div className="hero">
        <h1 className="title">Welcome to the Next.js Classic Slot Machine</h1>
        <p className="description">To get started, click the "spin" button.</p>
        <div className="row">
          <div className="card" style={spinResult[0] && { backgroundPositionY: getSpriteOffset(spinResult[0]) }}>
          </div>
          <div className="card" style={spinResult[1] && { backgroundPositionY: getSpriteOffset(spinResult[1]) }}>
          </div>
          <div className="card" style={spinResult[2] && { backgroundPositionY: getSpriteOffset(spinResult[2]) }}>
          </div>
          <button onClick={spin}>Spin</button>
        </div>
        {spinResult &&
          <div className="row">
            <p>Three in a row: {JSON.stringify(threeInARow)}</p>
          </div>
        }
      </div>
  
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 12px;
          line-height: 1.15;
          font-size: 37px;
        }
        .title, .description {
          text-align: center;
        }
        .row {
          max-width: 587px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          background-image: url(/symbol_strip.svg);
          background-repeat: repeat-y;
          background-position-x: center;
          background-position-y: 0px;
          height: 375px;
          width: 220px;
          border: 1px solid #9B9B9B;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
