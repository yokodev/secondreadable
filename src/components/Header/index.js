import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import image from 'assets/images/reading-snoo.png';
import './Header.css';
import { Link, NavLink, withRouter  } from 'react-router-dom';
import * as actions from 'containers/Posts/actions';

class Header extends Component {
  handleLinkCliked = cat => {
    this.props.dispatch(actions.getPostsByCat(cat));
  };

  render() {
    const { categories } = this.props;
    return (
      <header className='mainheader'>
        <div className='header-image'>
          <Image src={image} size='tiny' />
        </div>
        <div className='header-title'>
          <Link className='header-title-link' to="/"
            onClick={()=>this.props.dispatch(actions.getPosts())}> Readable </Link>
        </div>
        <div className="header-menu">
          <div className="ui pointing secondary menu">
            {categories.map(cat => (
              <NavLink  key={cat.name} to={`/${cat.path}`}
                className="header-menu-item"
                // activeClassName="header-menu-item-active"
                onClick={() => this.handleLinkCliked(cat.name)}
              >
                {cat.name}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    );
  }
}

export default connect()(Header)
