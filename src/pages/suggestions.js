import React from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as vbbActionsCreator from 'actions/vbb';

const metaData = {
  title: 'Suggestions for Virtual Brown Bag',
};

@connect(
  state => state.vbb,
  dispatch => bindActionCreators(vbbActionsCreator, dispatch)
)

export default class Suggestions extends React.Component {
  static propTypes = {
    suggestions: React.PropTypes.array,
    getSuggestions: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.getSuggestions();
  }

  renderGeneralSuggestion = (suggestion) => {
    if (suggestion.generalSuggestion) {
      return (
        <span>
          <div className="header">You guys should do:</div>
          <div className="description">{suggestion.generalSuggestion}</div>
        </span>
      );
    }
    return '';
  }

  renderTalkSuggestion = (suggestion) => {
    if (suggestion.talkSuggestion) {
      return (
        <span>
          <div className="header">You guys should have a talk about:</div>
          <div className="description">{suggestion.talkSuggestion}</div>
        </span>
      );
    }
    return '';
  }

  renderSuggestions = () => {
    const { suggestions } = this.props;
    return suggestions.map((suggestion) => {
      return (<li className="item" key={suggestion.id}>
        <div className="content">
          {this.renderGeneralSuggestion(suggestion)}
          {this.renderTalkSuggestion(suggestion)}
        </div>
      </li>);
    });
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Link to="/suggestions/new" activeClassName="active" className="ui button">
          Have a Suggestion?
        </Link>
        <ul className="ui list">
          {this.renderSuggestions()}
        </ul>
      </section>
    );
  }
}
