import MainCards from './MainCards'
import './mainsecton.css'
const Mainsection = () => {
  return (
    <div className='container_mainsection'>
    <div className="upcomminghikes">
      <h3>Upcomming Hikes</h3>
      <select name="" id="#">
        <option value="#">Sort by: Most Recent</option>
      </select>
    </div>
    <div className="cards">  
    <MainCards/>
    <MainCards/>
    <MainCards/>
    <MainCards/>
    </div>

    </div>
  )
}

export default Mainsection