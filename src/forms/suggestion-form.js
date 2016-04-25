import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Button from 'components/button';
import TextInput from 'components/text-input';
import Form from 'components/form';

export class SuggestionForm extends Component {
  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func,
    isSubmitting: React.PropTypes.bool,
    failureMessage: React.PropTypes.string,
  }

  render() {
    const { fields: { talkSuggestion, generalSuggestion }, handleSubmit, failureMessage, isSubmitting } = this.props;
    return (
      <Form onSubmit={handleSubmit} failureMessage={failureMessage}>
        <TextInput ref="talkSuggestion" label="I would like a talk on/by..." {...talkSuggestion} />
        <TextInput ref="generalSuggestion" label="Yall should do this..." {...generalSuggestion} />
        <Button label="Submit" color="blue" block submit working={isSubmitting} />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'suggest-topic',
  fields: ['talkSuggestion', 'generalSuggestion'],
})(SuggestionForm);
