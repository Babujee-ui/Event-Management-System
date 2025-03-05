import React from "react";
import { useNavigate } from "react-router-dom";
// import "./HomePage.css";

const Home = () => {
  const navigate=useNavigate()
  const handlechange=()=>{
    setTimeout(()=>{
      navigate('/events')
    },100)
  }
  return (
    <div>
      <header className="hero">
        <h2>Discover Local Events Near You</h2>
        <p>Stay updated with the latest happenings in your city.</p>
        <button onClick={handlechange}>Explore Events</button>
      </header>

      {/* Events Section */}
      <section className="events">
        <h3>Upcoming Events</h3>
        <div className="event-card">
          <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/img%207.jpg?updatedAt=1740982745816" />
          <h4>Music Festival</h4>
          <p>March 10, 2025 - City Park</p>
        </div>
        <div className="event-card">
          <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/event/img2.jpeg?updatedAt=1740975926932" />
          <h4>Food Carnival</h4>
          <p>March 20, 2025 - Downtown Plaza</p>
        </div>
        <div className="event-card">
          <img src="https://ik.imagekit.io/8pxyodyr4/imgwebkit/event/img3.jpg?updatedAt=1740975926889" />
          <h4>Tech Expo</h4>
          <p>April 5, 2025 - Convention Center</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025-Local Events. All rights reserved by Global-Events.</p>
      </footer>
    </div>
    
  );
};
export default Home;
