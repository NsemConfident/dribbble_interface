import profileImage from '../../../../../public/mypictures/mypic.jpg'
const WhoToFollow = () => {
  return (
    <div className="container_whotofollow">
    <h3>Who To Follow</h3>
    <ol>
      <li>
      <div className="whotofollow_profile" style={{backgroundImage: `url(${profileImage})`}}>
      </div>
        <div className="name_username">
          <h4>Scarlet Floyd</h4>
          <p>@Floydett</p>
        </div>
        <button>
        Follow
        </button>
      </li>
      <li>
      <div className="whotofollow_profile" style={{backgroundImage: `url(${profileImage})`}}>

      </div>
        <div className="name_username">
          <h4>Scarlet Floyd</h4>
          <p>@Floydett</p>
        </div>
        <button>
        Follow
        </button>
      </li>
      <li>
      <div className="whotofollow_profile" style={{backgroundImage: `url(${profileImage})`}}>

      </div>
        <div className="name_username">
          <h4>Scarlet Floyd</h4>
          <p>@Floydett</p>
        </div>
        <button>
        Follow
        </button>
      </li>
      <li>
      <div className="whotofollow_profile" style={{backgroundImage: `url(${profileImage})`}}>

      </div>
        <div className="name_username">
          <h4>Scarlet Floyd</h4>
          <p>@Floydett</p>
        </div>
        <button>
        Follow
        </button>
      </li>
      <li>
      <div className="whotofollow_profile" style={{backgroundImage: `url(${profileImage})`}}>

      </div>
        <div className="name_username">
          <h4>Scarlet Floyd</h4>
          <p>@Floydett</p>
        </div>
        <button>
        Follow
        </button>
      </li>
    </ol>
    <p>View More</p>
    </div>
  )
}

export default WhoToFollow