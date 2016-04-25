import React from 'react';
import Icon from 'components/icon';

export default class Button extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    working: React.PropTypes.bool,
    size: React.PropTypes.string,
    color: React.PropTypes.string,
  };

  buttonContent = () => {
    const { label, working } = this.props;
    if (working === true) {
      return (<Icon name="working" />);
    }
    return (label);
  }

  size = () => {
    const { size } = this.props;
    switch (size) {
      case 'mini': return 'mini';
      case 'tiny': return 'tiny';
      case 'large': return 'large';
      case 'x-large': return 'x-large';
      default:
        return '';
    }
  }

  color = () => {
    const { color } = this.props;
    switch (color) {
      case 'primary': return 'primary';
      case 'danger': return 'danger';
      case 'success': return 'success';
      case 'warning': return 'warning';
      case 'alt': return 'alt';
      default:
        return '';
    }
  }

  render() {
    const { disabled } = this.props;
    const css = `${this.size()} ${this.color()} vbb-btn`;
    return (
      <button disabled={disabled} className={css}>
        { this.buttonContent() }
      </button>
    );
  }
}
