import nature_mountain from "../../../../../public/mypictures/nature-mountain.png";
import nature from "../../../../../public/mypictures/nature.jpg";
const TodaysNews = () => {
  return (
    <div className="todaysnews">
      <h4>Today{"'"} s News</h4>
      <div className="todaysnews_content">
        <img src={nature_mountain} alt="A tall mountain" />
        <span className="title">
          <h6>Five questions you should answer truthfully</h6>
          <p>2h</p>
        </span>
      </div>
      <div className="todaysnews_content">
        <img src={nature} alt="A tall mountain" />
        <span className="title">
          <h6>Five questions you should answer truthfully</h6>
          <p>2h</p>
        </span>
      </div>
    </div>
  );
};

export default TodaysNews;
