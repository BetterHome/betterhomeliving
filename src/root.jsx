import { Outlet } from 'react-router-dom';
import Navigation from './UI/Navigation/Navigation.jsx'
import Footer from './UI/Footer/Footer.jsx';
import './root.css'

export default function Root() {
  return (
    <div id="bodyStructure">
    <Navigation/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
