import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {returnLeftTime} from "../../utils";

const PlayerScreen = (props) => {
  const {onExitClick, children} = props;

  return (
    <Fragment>
      <div className="player">
        {children}

        <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={`${props.progressFilm}`} max="100"></progress>
              <div className="player__toggler" style={{left: `${props.progressFilm}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{returnLeftTime(props.timeLeft)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play"
              onClick={props.onPauseClick}
            >
              {props.playFilm ? (
                <Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </Fragment>) : (
                <Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Fragment>
              )}
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen"
              onClick={props.onFullScreenClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PlayerScreen.propTypes = {
  onExitClick: PropTypes.func.isRequired,
  playFilm: PropTypes.bool.isRequired,
  progressFilm: PropTypes.number,
  timeLeft: PropTypes.number,
  onFullScreenClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PlayerScreen;
