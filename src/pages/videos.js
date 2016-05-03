import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as vbbActionsCreator from 'actions/vbb';

const Video = ({ video: { title } }) =>
  <li className="video">
    {title}
  </li>;

@connect(
  state => state.vbb,
  dispatch => bindActionCreators(vbbActionsCreator, dispatch)
)

export default class Videos extends React.Component {
  static propTypes = {
    videos: React.PropTypes.array,
    getVideos: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { videos } = this.props;
    return (
      <ul>
        {videos.map((v) => <Video video={v} />)}
      </ul>
    );
  }
}

// {videos.map(Video)}
