import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav id="app-header" className="ui secondary pointing menu">
        <Link to="/" activeClassName="active" className="item">
          Home
        </Link>
        <Link to="/suggestions" activeClassName="active" className="item">
          Suggestions
        </Link>
      </nav>
    );
  }
}
