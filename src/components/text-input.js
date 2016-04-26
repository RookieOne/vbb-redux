import React from 'react';
import Icon from 'components/icon';

export default class TextInput extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    success: React.PropTypes.bool,
    error: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    icon: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    type: React.PropTypes.string,
  };

  successCss = () => {
    const { success } = this.props;
    return success ? 'success' : '';
  }

  errorCss = () => {
    const { error } = this.props;
    return error ? 'error' : '';
  }

  errorMessage = () => {
    const { errorMessage } = this.props;
    return errorMessage ? (<span className="error-message">{errorMessage}</span>) : '';
  }

  handleChange = (event) => {
    console.log('on change', this.state)
    this.setState({ value: event.target.value });
  }

  render() {
    const { label, placeholder, value, onChange, type } = this.props;
    const parse = event => event.target.value;
    const css = `text-input field ${this.successCss()} ${this.errorCss()}`;
    const inputType = type || 'text';
    return (
      <div className={css}>
        <label>{label}</label>
        <input ref="input" className="ui input" type={inputType} placeholder={placeholder} value={value} onChange={event => onChange(parse(event))} />
        {this.errorMessage()}
      </div>
    );
  }
}
