import React from 'react';
import './layout.css';
import Header from '../Header';

function Layout(props) {
  const { categories = [] } = props;
  return (
    <div className="wrapper">
      <Header categories={categories} />
      <div className="content">{props.children}</div>
    </div>
  );
}
export default Layout;
