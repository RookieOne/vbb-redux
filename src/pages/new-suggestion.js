import React from 'react';
import DocumentMeta from 'react-document-meta';
import SuggestionForm from 'forms/suggestion-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vbbActionsCreator from 'actions/vbb';

const metaData = {
  title: 'Suggest Topic for Virtual Brown Bag',
};

@connect(
  state => state.vbb,
  dispatch => bindActionCreators(vbbActionsCreator, dispatch)
)

export default class NewSuggestion extends React.Component {
  static propTypes = {
    addSuggestion: React.PropTypes.func,
    isSavingNewSuggestion: React.PropTypes.bool,
    newSuggestionFailed: React.PropTypes.bool,
    newSuggestionFailureMessage: React.PropTypes.string,
  }

  addSuggestion = (data) => {
    const { generalSuggestion, talkSuggestion } = data;
    this.props.addSuggestion(generalSuggestion, talkSuggestion);
  }

  render() {
    const { isSavingNewSuggestion, newSuggestionFailureMessage } = this.props;
    return (
      <section id="new-suggestion">
        <DocumentMeta {...metaData} />
        <SuggestionForm onSubmit={this.addSuggestion} isSubmitting={isSavingNewSuggestion} failureMessage={newSuggestionFailureMessage} />
      </section>
    );
  }
}
