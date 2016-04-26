import { assert } from 'chai';
import API from 'api/vbb';
import Suggestions from 'pages/suggestions';
import * as support from 'support';
import React from 'react';

describe('<Suggestions />', function () {
  beforeEach(() => {
    this.mockApi(API, 'getSuggestions', [{
      id: 10,
      generalSuggestion: 'keep sharing',
    }]);
    this.render(<Suggestions />);

    this.executePromises();
  });
  it('should get suggestions', () => {
    this.expectApiCall(API, 'getSuggestions');
  });
  it('should set suggestions', () => {
    const state = this.getState();
    assert.equal(state.vbb.suggestions.length, 1);

    const suggestion = state.vbb.suggestions[0];
    assert.equal(suggestion.generalSuggestion, 'keep sharing');
  });
}.bind(support.setup()));
