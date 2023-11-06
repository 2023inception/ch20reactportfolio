import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1 className="about-me-heading">About Me</h1>
      <img
        className="profile-image"
        src="https://avatars.githubusercontent.com/u/83781798?v=4"
        alt="profile"
      />
      <p className="about-me-text">
        I am a full-stack web developer with a passion for creating web applications
        that are user-friendly and accessible. I am currently
        seeking a full-time position as a ful-stack web developer.
      </p>
    </div>
  );
}

export default AboutMe;
