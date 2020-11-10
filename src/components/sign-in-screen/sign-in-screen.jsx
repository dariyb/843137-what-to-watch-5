import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import FooterScreen from "../footer-screen/footer-screen";

class SignInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {onLogoClick} = this.props;
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
            <form
              action=""
              className="sign-in__form"
              onSubmit={this.onSubmitClick}
            >
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    ref={this.loginRef}
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="user-email"
                    id="user-email"
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input
                    ref={this.passwordRef}
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="user-password"
                    id="user-password"
                  />
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
  }
}

// const SignInScreen = (props) => {
//   const {onLogoClick} = props;
//   return (
//     <React.Fragment>
//       <div className="user-page">
//         <header className="page-header user-page__head">
//           <div className="logo">
//             <a onClick={onLogoClick} className="logo__link">
//               <span className="logo__letter logo__letter--1">W</span>
//               <span className="logo__letter logo__letter--2">T</span>
//               <span className="logo__letter logo__letter--3">W</span>
//             </a>
//           </div>
//
//           <h1 className="page-title user-page__title">Sign in</h1>
//         </header>
//
//         <div className="sign-in user-page__content">
//           <form action="#" className="sign-in__form">
//             <div className="sign-in__fields">
//               <div className="sign-in__field">
//                 <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
//                 <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
//               </div>
//               <div className="sign-in__field">
//                 <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
//                 <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
//               </div>
//             </div>
//             <div className="sign-in__submit">
//               <button className="sign-in__btn" type="submit">Sign in</button>
//             </div>
//           </form>
//         </div>
//
//         <FooterScreen onLogoClick={onLogoClick}/>
//       </div>
//     </React.Fragment>
//   );
// };

SignInScreen.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignInScreen};
export default connect(null, mapDispatchToProps)(SignInScreen);
