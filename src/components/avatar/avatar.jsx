import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

const Avatar = (props) => {
  const {onMyListClick, userData} = props;
  const avatarUrl = userData.data.avatar_url;

  return (
    <React.Fragment>
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63" onClick={onMyListClick}/>
      </div>
    </React.Fragment>
  );
};

Avatar.propTypes = {
  userData: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(undefined)]),
  onMyListClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  userData: USER.userData,
});

export {Avatar};
export default connect(mapStateToProps, null)(Avatar);
