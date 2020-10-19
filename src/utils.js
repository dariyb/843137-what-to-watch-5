const RatingScore = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

const getTextScore = (ratingScore) => {
  let textScore = null;
  switch (true) {
    case ratingScore >= RatingScore.BAD && ratingScore < RatingScore.NORMAL:
      textScore = `Bad`;
      break;
    case ratingScore >= RatingScore.NORMAL && ratingScore < RatingScore.GOOD:
      textScore = `Normal`;
      break;
    case ratingScore >= RatingScore.GOOD && ratingScore < RatingScore.VERY_GOOD:
      textScore = `Good`;
      break;
    case ratingScore >= RatingScore.VERY_GOOD && ratingScore < RatingScore.AWESOME:
      textScore = `Very Good`;
      break;
    case ratingScore === RatingScore.AWESOME:
      textScore = `Awesome`;
      break;
  }
  return textScore;
};

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export {getTextScore, TABS};
