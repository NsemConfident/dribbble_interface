import profile from '../../../../../public/mypictures/mypic.jpg'
const Profile = () => {
    return (
      <div className="container_profile">
      <img src={profile} alt="" />
      <h2>Dillon Lesly</h2>
      <p>@dillon Lesly</p>
    </div>
    )
  }
  
  export default Profile