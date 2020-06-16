import React, { useState } from 'react';
import axios from 'axios';
import Head from '../components/head';

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

  return (
    <div>
      <Head title="Home" />
      <div className="hero">
        <h1 className="title">Welcome to the Next.js Classic Slot Machine</h1>
        <p className="description">To get started, click the "spin" button.</p>
        <div className="row">
          <div className="card">
            <h2>{spinResult[0] || "First Letter"}</h2>
          </div>
          <div className="card">
            <h2>{spinResult[1] || "Second Letter"}</h2>
          </div>
          <div className="card">
            <h2>{spinResult[2] || "Third Letter"}</h2>
          </div>
          <div className="card">
            <button onClick={spin}>Spin</button>
          </div>
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
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
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
