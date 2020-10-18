import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {filmPreview, preview} = this.props;
    const video = this._videoRef.current;

    video.src = filmPreview;
    video.poster = preview;
    video.width = 280;
    video.height = 175;

    video.oncanplaythrough = () => {
      this._timeout = setTimeout(() => video.play(), 1000);
    };
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
    const video = this._videoRef.current;
    video.oncanplaythrough = null;
  }

  render() {
    return (
      <>
        <video
          ref={this._videoRef}
          muted
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  filmPreview: PropTypes.string.isRequired,
};

export default VideoPlayer;
