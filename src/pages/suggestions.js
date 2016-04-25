import React from 'react';
import DocumentMeta from 'react-document-meta';
import SuggestionForm from 'forms/suggestion-form';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as vbbActionsCreator from 'actions/vbb';

const metaData = {
  title: 'Suggestions for Virtual Brown Bag',
};

@connect(
  state => state.vbb
)

export default class NewSuggestion extends React.Component {
  static propTypes = {
    suggestions: React.PropTypes.array,
  }
  
  renderSuggestions = () => {
    const { suggestions } = this.props
    return suggestions.map((suggestion) => {
      return (<li key={suggestion.id}>{suggestion.generalSuggestion} - {suggestion.talkSuggestion} </li>)
    })
  }

  render() {
    const { suggestions } = this.props;
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
