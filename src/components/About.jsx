return (
  <div className="about-page">
    <div className="about-hero">
      <div className="about-hero__bg" />
      <div className="about-hero__content">
        <h1 className="about-title">About</h1>

        <userContext.Consumer>
          {({ loggedinUser }) => (
            <p className="about-user">Current User: <span>{loggedinUser}</span></p>
          )}
        </userContext.Consumer>

        <p className="about-sub">
          Building delightful web experiences with performance, accessibility, and clean architecture in mind.
        </p>
      </div>
    </div>

    <section className="about-grid">
      {/* Left: Profile card */}
      <article className="card profile-card">
        <div className="avatar" aria-hidden="true">PU</div>
        <h2 className="card-title">Praveen Udayagiri</h2>
        <p className="card-sub">Full-Stack Developer • MERN</p>
        <ul className="profile-list">
          <li><strong>Focus:</strong> Frontend, Realtime Apps</li>
          <li><strong>Stack:</strong> React, Node, Express, MongoDB</li>
          <li><strong>Hobbies:</strong> DSA, Open Source, Cloud</li>
        </ul>

        <div className="children">
          <UserClass name={"Child 1"} />
          <UserClass name={"Child 2"} />
        </div>
      </article>

      {/* Right: Contact form */}
      <article className="card form-card">
        <h2 className="card-title">Get in touch</h2>
        <p className="card-sub">Have a question or collaboration idea? Send a message.</p>

        <form className="about-form" onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" type="text" placeholder="e.g., Jane Doe" required />
            <span className="hint">Required</span>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="name@gmail.com" required />
            <span className="hint">We’ll never share your email.</span>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="Project idea, feedback, etc." />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message…" required />
            <span className="hint">Be as detailed as you like.</span>
          </div>

          <div className="actions">
            <button className="btn" type="submit">Send Message</button>
            <button className="btn btn-ghost" type="reset">Clear</button>
          </div>
        </form>
      </article>
    </section>
  </div>
);
