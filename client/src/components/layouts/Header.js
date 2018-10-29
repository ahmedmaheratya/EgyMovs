import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
    <header>
      <div className="header-search">
        <div className="logo__area-mobile">
          <button>&#9776;</button>
        </div>
        <input type="text" placeholder="Search anything!" />
      </div>
      <div className="header-menu">
        <div className="menu">
            <ul>
                <li><NavLink to="/recently" activeClassName="is-active">مضاف مؤخراً</NavLink></li>
                <li><NavLink to="/tv-shows" activeClassName="is-active">المسلسلات</NavLink></li>
                <li><NavLink to="/movies" activeClassName="is-active">الافلام</NavLink></li>
                <li><NavLink to="/" activeClassName="is-active" exact>الرئيسية</NavLink></li>
            </ul>
        </div>
        <div className="logo">
            <Link to="/">Logo</Link>
        </div>
      </div>
    </header>
)

export default Header

