import React from 'react';
import Header from 'components/header';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <div id="app-wrapper">
        <Header />
        <main id="app-main">
          {this.props.children}
        </main>
      </div>
    );
  }
}
