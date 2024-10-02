import Leftsidebar from './maincomponents/leftsidebar/Leftsidebar'
import Mainsection from './maincomponents/mainsection/Mainsection'
import Rightsidebar from './maincomponents/rightsidebar/Rightsidebar'
import './main.css'

const Main = () => {
  return (
    <div className='container_main'>
        <Leftsidebar/>
        <Mainsection/>
        <Rightsidebar/>
    </div>
  )
}

export default Main