import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div id="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}
