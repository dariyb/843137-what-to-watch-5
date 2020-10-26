import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const withPlayerScreen = (Component) => {
  class WithPlayerScreen extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        playFilm: true,
        timeLeft: null,
        progressFilm: null,
      };

      this._onPauseClick = this._onPauseClick.bind(this);
      this._onFullScreenClick = this._onFullScreenClick.bind(this);
      this._filmTimeLeft = this._filmTimeLeft.bind(this);
    }

    _onFullScreenClick(evt) {
      evt.preventDefault();
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _filmTimeLeft() {
      const video = this._videoRef.current;
      this.setState({
        progressFilm: video.currentTime * 100 / video.duration,
        timeLeft: video.duration - video.currentTime,
      });
    }

    _onPauseClick(evt) {
      evt.preventDefault();
      const {playFilm} = this.state;

      if (playFilm) {
        this.setState({
          playFilm: false
        });
      } else {
        this.setState({
          playFilm: true
        });
      }
    }

    componentDidMount() {
      const {films} = this.props;
      const video = this._videoRef.current;

      video.src = films[0].filmPreview;
      video.poster = films[0].preview;
      video.play();
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.playFilm) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      const {films} = this.props;
      return (
        <Component
          {...this.props}
          playFilm={this.state.playFilm}
          timeLeft={this.state.timeLeft}
          progressFilm={this.state.progressFilm}
          films={films}
          onFullScreenClick={this._onFullScreenClick}
          onPauseClick={this._onPauseClick}
        >
          <video
            ref={this._videoRef}
            onTimeUpdate={this._filmTimeLeft}
            className="player__video"
            poster={films[0].preview}
          />
        </Component>
      );
    }
  }

  WithPlayerScreen.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired
  };
  return WithPlayerScreen;
};

export default withPlayerScreen;
