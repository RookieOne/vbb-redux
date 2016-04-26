import React from 'react';

export default class Form extends React.Component {

  static propTypes = {
    children: React.PropTypes.any,
    errorMessage: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
  };

  render() {
    const { children, errorMessage, onSubmit } = this.props;
    return (
      <form className="vbb-form ui form" onSubmit={onSubmit}>
        <span className="form-error">{errorMessage}</span>
        {children}
      </form>
    );
  }
}
