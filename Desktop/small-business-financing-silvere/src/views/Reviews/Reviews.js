import React from "react";
import Header from "../../components/Header/Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { replies, reviews as reviewsList } from "../../assets/data/reviews";
import {
  NoSelectReview,
  ReviewsHeader,
  ReviewsList,
  SelectReview,
} from "./components";

const Reviews = () => {
  const [reviews, setReviews] = React.useState(reviewsList);
  const [allReplies, setAllReplies] = React.useState(replies);
  const [currentReplyList, setCurrentReplyList] = React.useState([]);
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    setCurrentReplyList(allReplies.filter((t) => t.reviewID === active));
  }, [active, allReplies]);

  const setReplies = (reply) => {
    setAllReplies([...allReplies, reply]);
  };

  return (
    <Box>
      <Header pageName="reviews" />
      <Grid container sx={{ display: "flex" }}>
        <Grid item md={8}>
          <ReviewsHeader nbReviews={"4.0"} />
          <ReviewsList
            reviews={reviews}
            setActive={setActive}
            active={active}
          />
        </Grid>
        <Grid item md={4}>
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {active !== null ? (
              <SelectReview
                review={reviews[active]}
                replies={currentReplyList}
                setReplies={setReplies}
              />
            ) : (
              <NoSelectReview />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
