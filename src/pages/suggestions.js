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

  renderSuggestions = () => {
    const { suggestions } = this.props;
    return suggestions.map((suggestion) => {
      return (<li key={suggestion.id}>{suggestion.generalSuggestion} - {suggestion.talkSuggestion} </li>);
    });
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Link to="/suggestions/new" activeClassName="active">
          Have a Suggestion?
        </Link>
        <ul>
          {this.renderSuggestions()}
        </ul>
      </section>
    );
  }
}
