import { assert } from 'chai';
import API from 'api/vbb';
import Videoes from 'pages/videos';
import * as support from 'support';
import React from 'react';

describe('<Videoes />', function () {
  beforeEach(() => {
    this.mockApi(API, 'getVideos', [{
      title: 'Cycle.js',
    }, {
      title: 'gimgen',
    }]);
    this.render(<Videoes />);

    this.executePromises();
  });
  it('should make an API request to get videoes', () => {
    this.expectApiCall(API, 'getVideos');
  });
  it('should add videoes to state', () => {
    const state = this.getState();
    assert.equal(state.vbb.videos.length, 2);
  });
  it('should render videoes to HTML', () => {
    const $ = this.renderHTML();
    assert.equal($('li.video').length, 2);
  });
}.bind(support.setup()));
