import React from "react";
// import "./AboutPage.css";

const About = () => {
  return (
    <div>
      <header className="header">
        <h1>About Us</h1>
        <p>Learn more about our mission and team.</p>
      </header>

      <section className="about-section1">
        <h2>Our Vision</h2>
        <p>
        To create a connected and vibrant community where people can easily discover, engage with, and participate in local events, fostering meaningful experiences and social interactions.
        </p>
      </section>
      <section className="about-section2">
        <h2>Our Mission</h2>
        <p>
          We strive to bring communities together by providing an easy-to-use
          platform for discovering and managing local events<br></br><br></br>
          <table>
          <tr>1️⃣ Empower Communities – Provide a seamless platform that bridges the gap between event organizers and attendees.</tr>
          <tr>2️⃣ Enhance Accessibility – Ensure local events are easily discoverable and accessible to everyone.</tr>
          <tr>3️⃣ Promote Engagement – Encourage active participation in cultural, social, and entertainment events.</tr>
          <tr>4️⃣ Support Local Growth – Help local businesses, artists, and organizations thrive by increasing event visibility.</tr>
          </table>
        </p>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/img6.jpeg?updatedAt=1740980700059" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/img6.jpeg?updatedAt=1740980700059" />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/img6.jpeg?updatedAt=1740980700059" />
            <h3>Mike Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Local Events. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
