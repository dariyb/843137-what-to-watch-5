import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import FooterScreen from "../footer-screen/footer-screen";

const SignInScreen = (props) => {
  const {onLogoClick} = props;

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    const {onSubmit} = props;

    onSubmit(props.activeState);

  };

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a onClick={onLogoClick} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form"
            onSubmit={onSubmitClick}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="login"
                  id="user-email"
                  onChange={props.onChange} />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="user-password"
                  onChange={props.onChange} />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <FooterScreen onLogoClick={onLogoClick}/>
      </div>
    </React.Fragment>
  );
};

SignInScreen.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  activeState: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignInScreen};
export default connect(null, mapDispatchToProps)(SignInScreen);
