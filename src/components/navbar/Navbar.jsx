import './navBar.scss'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { Link } from 'react-router-dom'
import { DarkModeContext, useDarkContext } from '../../context/darkModeContext'

const Navbar = () => {
  const { darkMode, toggle } = useDarkContext({ DarkModeContext })

  return (
    <nav className="navbar">
      <section className="left">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <span>nexusweb</span>
        </Link>
        <HomeRoundedIcon />
        {darkMode ? (
          <DarkModeRoundedIcon onClick={toggle} />
        ) : (
          <WbSunnyRoundedIcon onClick={toggle} />
        )}
        <GridViewRoundedIcon />
        <div className="search">
          <SearchRoundedIcon />
          <input type="search" placeholder="Search..." name="" id="" />
        </div>
      </section>
      <section className="right">
        <PersonRoundedIcon />
        <EmailRoundedIcon />
        <NotificationsRoundedIcon />
        <div className="user">
          <img
            src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
            alt=""
          />
          <span>Chandler Bing</span>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
