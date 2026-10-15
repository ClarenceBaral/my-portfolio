import './style.css';

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <h1>PORTFOLIO</h1>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#connection">CONNECTION</a>
      </nav>

      {/* 1. HOME SECTION */}
      <section id="home" className="home">
        <div className="home-text">
          <p>MY PORTFOLIO</p>
          <h2>
            Hi my name is Clarence Baral.
          </h2>
          <p>
            I create beautiful and easy-to-use
            digital experiences that people enjoy using.
          </p>

          <a href="#projects" className="button">
            VIEW MY WORK ↗
          </a>
          <a href="#about" className="button">
            ABOUT ME
          </a>
          <p>● AVAILABLE FOR PROJECTS</p>
        </div>

        {/* Picture sa Home */}
        <div className="home-image">
          <img
        
          />
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
<section id="about" className="section">

  <p>ABOUT ME</p>

  <h2>
    Get to know me.
    <br />
    <em>My story.</em>
  </h2>

  {/* Personal information ko */}
  <p className="section-description">
    Hi! I am Clarence V. Baral, a third-year Bachelor
    of Science in Information Technology (BSIT) student
    at Batangas State University - TNEU, Balayan Campus.
    I enjoy playing guitar, chess, volleyball, and badminton.
    I also love UI design and creating modern, creative,
    and user-friendly interfaces. I am always eager to learn
    new skills and improve my knowledge in technology and design.
  </p>

  {/* Mga hobbies at interests ko */}
  <div className="service-list">

    <div className="service-card">
      <h3>MUSIC</h3>
      <p>Playing the guitar and enjoying music.</p>
    </div>

    <div className="service-card">
      <h3>STRATEGY</h3>
      <p>Playing chess and improving my critical thinking.</p>
    </div>

    <div className="service-card">
      <h3>SPORTS</h3>
      <p>Playing volleyball and badminton.</p>
    </div>

    <div className="service-card">
      <h3>UI DESIGN</h3>
      <p>Designing creative and user-friendly interfaces.</p>
    </div>

  </div>

</section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="section">
        <p>MY PROJECTS</p>
        <h2>
          Designing impact through
          <br />
          meaningful solutions.
        </h2>
        <p>Here are some of my sample design projects.</p>

        {/* Project 1 */}
        <div className="project-list">
          <div className="project-card">
            <img
              
            />
            <h3>DESIGN</h3>
            <p>Fintech Dashboard Design</p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img
             
            />
            <h3>DESIGN</h3>
            <p>Mental Wellness App</p>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img
             
            />
            <h3>DESIGN</h3>
            <p>Travel Website Design</p>
          </div>
        </div>
      </section>

      {/* 4. CONNECTION SECTION */}
      <section id="connection" className="section contact">
        <p>LET'S CONNECT</p>
        <h2>
          Let's build something
          <br />
          meaningful together.
        </h2>
        <p>Have a project in mind? Send me a message!</p>

        {/* Contact form */}
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Tell me about your project"
            rows="5"
            required
          ></textarea>
          <button type="submit">SEND MESSAGE ↗</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>CLARENCE</h3>
        <p>Designing the future, one experience at a time.</p>
        <p>© 2026 CLARENCE BARAL</p>
      </footer>

    </div>
  );
}

export default App;