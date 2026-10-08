import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">CI Demo</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="badge">React + CI/CD</span>

          <h1>
            Build. Test. <span>Deploy.</span>
          </h1>

          <p>
            A simple React application created to test and demonstrate your
            CI/CD pipeline.
          </p>

          <div className="buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>CI/CD Ready</h2>

        <p className="section-description">
          Use this demo application to verify your build and deployment
          pipeline.
        </p>

        <div className="feature-grid">
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Fast Build</h3>
            <p>Lightweight React application that builds quickly.</p>
          </div>

          <div className="card">
            <div className="icon">🧪</div>
            <h3>Easy Testing</h3>
            <p>Simple structure for adding automated tests.</p>
          </div>

          <div className="card">
            <div className="icon">🚀</div>
            <h3>Easy Deploy</h3>
            <p>Perfect for testing automated deployment.</p>
          </div>
        </div>
      </section>

      <section className="status">
        <div>
          <span className="status-dot"></span>
          <strong>Application Status</strong>
        </div>

        <span className="success">● Running Successfully</span>
      </section>

      <footer>
        <p>© 2026 CI Demo Application</p>
      </footer>
    </div>
  );
}

export default App;