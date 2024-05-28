import { NavLink } from 'react-router-dom'
import {useState} from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h1 className="brand">Better Home Living Services</h1>
      <ul className="horizontal">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li><a href="tel:6783537696"><strong>(678) 353-7696</strong></a></li>
      </ul>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
      <li><NavLink to="/" onClick={()=>setIsOpen(!isOpen)}>Home</NavLink></li>
      <li><NavLink to="/About" onClick={()=>setIsOpen(!isOpen)}>About</NavLink></li>
      <li><a href="tel:6783537696"><strong>(678) 353-7696</strong></a></li>
      <li><img className="closeButton" src="/close.svg" alt="closemenu" onClick={()=>setIsOpen(false)}/></li>
      </ul>
      <img className="menuButton" src="/menu.svg" alt="menuIcon" onClick={()=>setIsOpen(true)}/>
    </nav>
  )
}
