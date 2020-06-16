import Head from '../components/head';

export default () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <h1 className="title">Welcome to the Next.js Classic Slot Machine</h1>
      <p className="description">To get started, click the "spin" button.</p>
      <div className="row">
          <a className="card">
            <h2>First Letter</h2>
          </a>
          <a className="card">
            <h2>Second Letter</h2>
          </a>
          <a className="card">
            <h2>Third Letter</h2>
          </a>
          <a className="card">
            <h2>Spin</h2>
          </a>
        </div>
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
