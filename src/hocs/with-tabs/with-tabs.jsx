import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: props.variantTabs[0],
      };
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.state.activeTab}
        onClick={(evt) => {
          evt.preventDefault();
          this.setState({activeTab: evt.target.textContent});
        }}
      />;
    }
  }
  WithActiveTab.propTypes = {
    variantTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
