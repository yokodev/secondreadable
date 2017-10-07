import React from 'react';

import './layout.css';
import * as actions from 'containers/Categories/actions';
import Header from '../Header';

function Layout(props) {
  return (
    <div className="wrapper">
      {/* <Header categories={categories} /> */}
      <Header  />
      <div className="content">
        {props.children}
      </div> 
    </div>
  );
}
export default Layout;
