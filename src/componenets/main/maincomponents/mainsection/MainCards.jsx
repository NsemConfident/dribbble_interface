import nature_mountain from "../../../../../public/mypictures/nature-mountain.png";

const MainCards = () => {
  return (
    <div className="card">
      <div className="card_items">
        <div className="card_photos">
          <img src={nature_mountain} alt="A Tall Mountain" />
          <div className="card_date">
            <h4>DEC</h4>
            <h3>24</h3>
          </div>
          <div className="card_topograhy">
            <div className="distance">
              <h5>Distance</h5>
              <h3>106ml</h3>
            </div>
            <div className="distance">
              <h5>Elevation</h5>
              <h3>4.884 m</h3>
            </div>
            <div className="distance">
              <h5>Difficulty</h5>
              <h3>Hard</h3>
            </div>
          </div>
        </div>
        <p className="day">THU 07:30 AM</p>
        <h4>Mount Semeru</h4>
        <p>Location . Lumajang, East Java</p>
        <hr />
        <div className="hike_container">
          <div className="profile_hikers">
            <div className="hiker" style={{backgroundImage: `url(${nature_mountain})`}}></div>
            <div className="hiker" style={{backgroundImage: `url(${nature_mountain})`}}></div>
            <div className="hiker" style={{backgroundImage: `url(${nature_mountain})`}}></div>
            <div className="hiker counter">+2</div>
          </div>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
