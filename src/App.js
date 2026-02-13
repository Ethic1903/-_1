import './App.css';
import orbit from './assets/orbit.svg';

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow reveal delay-1">Practical Work 1</p>
          <h1 className="reveal delay-2">Node.js + React: First SPA</h1>
          <p className="lead reveal delay-3">
            Build a simple single-page app, then update the layout, styles, and
            visuals to make it your own.
          </p>
          <div className="hero__actions reveal delay-4">
            <button className="btn btn--primary" type="button">
              Start Editing
            </button>
            <button className="btn btn--ghost" type="button">
              Check Tasks
            </button>
          </div>
          <div className="hero__stats reveal delay-5">
            <div className="stat">
              <span className="stat__value">3</span>
              <span className="stat__label">Core steps</span>
            </div>
            <div className="stat">
              <span className="stat__value">1</span>
              <span className="stat__label">Single page</span>
            </div>
            <div className="stat">
              <span className="stat__value">100%</span>
              <span className="stat__label">React UI</span>
            </div>
          </div>
        </div>
        <div className="hero__art reveal delay-3">
          <img src={orbit} alt="Stylized orbit graphic" />
          <div className="badge">React SPA</div>
          <div className="badge badge--alt">Node.js</div>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>What you practice</h2>
          <div className="cards">
            <article className="card">
              <h3>Set up Node.js</h3>
              <p>
                Verify that npm works and you can run a development server
                locally.
              </p>
            </article>
            <article className="card">
              <h3>Create the SPA</h3>
              <p>
                Bootstrap a React project and inspect how the app renders inside
                the root element.
              </p>
            </article>
            <article className="card">
              <h3>Refresh the UI</h3>
              <p>
                Replace the initial markup with your own layout, styles, and
                imagery.
              </p>
            </article>
          </div>
        </section>

        <section className="section timeline">
          <h2>Quick flow</h2>
          <ol className="timeline__list">
            <li>Install Node.js and confirm npm is available.</li>
            <li>Create the React app and run it with npm scripts.</li>
            <li>Update App.js, App.css, and assets to match your concept.</li>
            <li>Validate the layout on desktop and mobile widths.</li>
          </ol>
        </section>

        <section className="section cta">
          <div className="cta__content">
            <h2>Ready for launch?</h2>
            <p>
              Keep iterating on the design and make sure the page feels
              consistent, responsive, and purposeful.
            </p>
          </div>
          <button className="btn btn--primary" type="button">
            Review Checklist
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>Practice 1 · React SPA · 2026</p>
      </footer>
    </div>
  );
}

export default App;
