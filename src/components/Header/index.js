// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="bg-cont">
    <Link to="/">
      <li className="l">Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </nav>
)

export default Header
