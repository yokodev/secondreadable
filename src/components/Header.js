import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Image } from 'semantic-ui-react'
import image from '../assets/images/reading-snoo.png'
import './Header.css'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    const { categories } = this.props
    return (
      <header className="mainheader">
        <div className="header-image">
          <Image src={image} size="tiny" />
        </div>
        <div className="header-title">
          <Link className="header-title-link" to="/">
            Readable
          </Link>
        </div>
        <div className="header-menu">
          <div className="ui pointing secondary menu">
            {categories.map(cat => (
              <NavLink
                key={cat.name}
                to={`/${cat.path}`}
                className="header-menu-item"
                activeClassName="header-menu-item-active"
              >
                {cat.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(connect()(Header))
