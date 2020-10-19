import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
// import {withActiveTab} from "../../hocs/with-tabs/with-tabs";
import {TABS} from "../../utils";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MoviewReviews from "../movie-reviews/movie-reviews";

const tabs = [`Overview`, `Details`, `Reviews`];

const Tabs = (props) => {
  const {films} = props;

  const showActiveTab = (activeNavTab, movies) => {
    switch (activeNavTab) {
      case TABS.OVERVIEW:
        return <MovieOverview films={movies}/>;
      case TABS.DETAILS:
        return <MovieDetails films={movies}/>;
      case TABS.REVIEWS:
        return <MoviewReviews films={movies}/>;
    }
    return null;
  };

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) =>
            <li className={`movie-nav__item ${tab === props.isActive ? `movie-nav__item--active` : ``}`}
              key={`${i}-${tab}`}>
              <a href="#" className="movie-nav__link"
                onClick={props.onClick}
              >{tab}</a>
            </li>
          )}
        </ul>
      </nav>
      {showActiveTab(props.isActive, films)}
    </Fragment>
  );
};


// class Tabs extends PureComponent {
//   constructor(props) {
//     super(props);
//
//     // this.state = {
//     //   activeTab: TABS.OVERVIEW,
//     // };
//   }
//
//   render() {
//     const {activeTab} = this.state;
//
//     const showActiveTab = (activeNavTab, movies) => {
//       switch (activeTab) {
//         case TABS.OVERVIEW:
//           return <MovieOverview films={movies}/>;
//         case TABS.DETAILS:
//           return <MovieDetails films={movies}/>;
//         case TABS.REVIEWS:
//           return <MoviewReviews films={movies}/>;
//       }
//       return null;
//     };
//
//     return (
//       <Fragment>
//         <nav className="movie-nav movie-card__nav">
//           <ul className="movie-nav__list">
//             {tabs.map((tab, i) =>
//               <li className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
//                 key={`${i}-${tab}`}>
//                 <a href="#" className="movie-nav__link"
//                   onClick={(evt) => {
//                     evt.preventDefault();
//                     this.setState({activeTab: evt.target.textContent});
//                   }}
//                 >{tab}</a>
//               </li>
//             )}
//           </ul>
//         </nav>
//         {showActiveTab(activeTab)}
//       </Fragment>
//     );
//   }
// }

Tabs.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  // activeTab: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tabs;
