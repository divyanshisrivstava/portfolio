import React from 'react';

export default function CleanProfessionalPortfolio() {
  const projects = [
    { title: 'Portfolio Website', desc: 'Responsive personal portfolio built with React and modern UI practices.', tech: 'React • CSS' },
    { title: 'Todo App', desc: 'Task manager with filters, local storage, and clean user experience.', tech: 'JavaScript • React' },
    { title: 'E-commerce UI', desc: 'Modern shopping interface with product cards and cart flow design.', tech: 'React • CSS' },
  ];

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python',];

  return (<>
<style>{`
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,Arial,sans-serif;color:#fff;background:radial-gradient(circle at top left,#1e1b4b,transparent 30%),radial-gradient(circle at bottom right,#0ea5e9,transparent 25%),linear-gradient(135deg,#020617,#0f172a,#111827);min-height:100vh}
a{text-decoration:none;color:inherit}
.page{min-height:100vh;padding:28px;position:relative;overflow:hidden}.container{max-width:1180px;margin:auto}
.header,.hero,.actions{display:flex;gap:16px}.header{justify-content:space-between;align-items:center;padding:18px 22px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(12px);border-radius:22px;position:sticky;top:16px;z-index:5}
.header h1{margin:0;font-size:28px}.header p,.muted{color:#94a3b8;margin:4px 0 0}.accent{color:#a5b4fc}
.btn{padding:12px 18px;border:none;border-radius:14px;background:rgba(255,255,255,.06);color:#fff;cursor:pointer;font-weight:600;transition:.25s;box-shadow:0 8px 20px rgba(0,0,0,.2)}
.btn:hover,.social:hover,.linkBtn:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(99,102,241,.25)}
.primary{background:linear-gradient(135deg,#6366f1,#8b5cf6)}.light{background:#fff;color:#111827}
.hero{margin:70px 0 50px;align-items:center;justify-content:space-between;gap:40px}.hero h2{font-size:56px;line-height:1.05;max-width:620px;margin:10px 0}.hero .muted{
  font-size:18px;
  max-width:560px;
  margin-bottom:22px;}

.card{background:rgba(255,255,255,.05);padding:24px;border-radius:24px;border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(14px);box-shadow:0 18px 45px rgba(0,0,0,.25)}
.heroCard{width:320px;height:320px;display:flex;align-items:center;justify-content:center;animation:floatCard 5s ease-in-out infinite}.profileImg{width:230px;height:230px;object-fit:cover;border-radius:50%;border:5px solid rgba(255,255,255,.2);box-shadow:0 0 0 8px rgba(99,102,241,.18)}
section{margin-top:28px}section h3{font-size:28px;margin-bottom:18px}
.chips,.grid{display:flex;gap:14px;flex-wrap:wrap}.chip{background:rgba(255,255,255,.06);padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.08);font-size:14px}
.grid .card{width:calc(33.333% - 10px)}.grid .card h4{margin:0 0 10px;font-size:20px}.small{font-size:14px}
.linkBtn,.social{margin-top:12px;background:rgba(255,255,255,.06);padding:10px 14px;border-radius:12px;display:inline-block}
.wrap{flex-wrap:wrap}.contact{margin:45px 0 10px}
@keyframes floatCard{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@media(max-width:992px){.hero{flex-direction:column-reverse;align-items:flex-start}.hero h2{font-size:44px}.grid .card{width:calc(50% - 10px)}}
@media(max-width:640px){.page{padding:16px}.header{flex-direction:column;align-items:flex-start}.hero h2{font-size:34px}.grid .card{width:100%}.actions{flex-wrap:wrap}.heroCard{width:100%;height:auto;padding:20px}}
`}</style>
    <div className="page"><div className="stars"></div><div className="stars2"></div>
      <div className="container">
        <header className="header">
          <div>
            <h1>Divyanshi Srivastava</h1>
            <p>Web Developer • React Enthusiast</p>
          </div>
          <button className="btn primary">Resume</button>
        </header>

        <section className="hero">
          <div>
            <p className="accent">Hello, I'm a Developer</p>
            <h2>I build clean and modern web experiences.</h2>
            <p className="muted">Focused on creating responsive, user-friendly, and professional websites using modern frontend technologies.</p>
            <div className="actions">
              <br></br><br></br>
              <button className="btn light">View Projects</button>
              <a href="mailto:divyanshisrivstava@gmail.com" className="btn">Hire Me</a>
            </div>
          </div>
          <div className="card heroCard">
  <img src="/myphoto.jpeg" alt="Divyanshi" className="profileImg" />
</div>
        </section>

        <section>
          <h3>Skills</h3>
          <div className="chips">
            {skills.map((skill, i) => <span key={i} className="chip">{skill}</span>)}
          </div>
        </section>

        <section>
          <h3>Featured Projects</h3>
          <div className="grid">
            {projects.map((project, i) => (
              <div key={i} className="card">
                <h4>{project.title}</h4>
                <p className="muted">{project.desc}</p>
                <p className="accent small">{project.tech}</p>
                <button className="linkBtn">View Project ↗</button>
              </div>
            ))}
          </div>
        </section>

        <section className="card contact">
          <h3>Let's Work Together</h3>
          <p className="muted">Open for internships, freelance work, and exciting collaborations.</p>
          <div className="actions wrap">
            <a
  href="https://github.com/yourusername"
  className="social"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/divyanshisrivstava"
  className="social"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

<a
  href="mailto:divyanshisrivstava@gmail.com"
  className="social"
>
  Email
</a>
          </div>
        </section>
      </div>
    </div>
  </>);
}
