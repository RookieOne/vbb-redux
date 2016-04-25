import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div id="app-wrapper">
        <nav>
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/suggestions" activeClassName="active">
            Suggestions
          </Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
