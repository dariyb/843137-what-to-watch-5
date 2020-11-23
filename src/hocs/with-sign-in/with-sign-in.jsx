import React, {PureComponent} from 'react';

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        login: ``,
        password: ``,
      };

      this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }


    render() {
      return <Component
        {...this.props}
        onChange={this.onChangeInput}
        activeState={this.state}
      />;
    }
  }
  return WithSignIn;
};


export default withSignIn;
