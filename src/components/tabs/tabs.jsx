import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

export const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const tabs = [`Overview`, `Details`, `Reviews`];

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TABS.OVERVIEW,
    };
  }

  render() {
    const {activeTab} = this.state;
    const {renderNavTab} = this.props;

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, i) =>
              <li className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
                key={`${i}-${tab}`}>
                <a href="#" className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.setState({activeTab: evt.target.textContent});
                  }}
                >{tab}</a>
              </li>
            )}
          </ul>
        </nav>
        {renderNavTab(activeTab)}
      </Fragment>
    );
  }
}

Tabs.propTypes = {
  renderNavTab: PropTypes.func.isRequired,
};

export default Tabs;
