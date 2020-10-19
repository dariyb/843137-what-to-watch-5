import React, {PureComponent} from 'react';
import {TABS} from "../../utils";
import Tabs from "../../components/tabs/tabs";
// import MovieOverview from "../movie-overview/movie-overview";
// import MovieDetails from "../movie-details/movie-details";
// import MoviewReviews from "../movie-reviews/movie-reviews";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TABS.OVERVIEW,
      };
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        renderNavTab={(currentTab, films) => {
          return (
            <Tabs
              films={films}
              isActive={currentTab === activeTab}
              onClick={(evt) => {
                evt.preventDefault();
                this.setState({activeTab: evt.target.textContent});
              }}
            />
          );
        }}
      />;
    }
  }
  WithActiveTab.propTypes = {};

  return WithActiveTab;
};

export default withActiveTab;
