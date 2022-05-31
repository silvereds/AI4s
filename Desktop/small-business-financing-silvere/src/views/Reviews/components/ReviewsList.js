import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { CustomTypography, HeaderWithAvatar } from "./commentWidget";
import { CommentView } from "./commentWidget";
import Link from "@mui/material/Link";
import profile from "../../../assets/images/profile.jpg";
import React from "react";

const ReviewsListItem = ({ review, active, setActive }) => {
  return (
    <Link
      component="button"
      underline="none"
      sx={{
        background: "#FFFFFF",
        boxShadow:
          active === review.id
            ? "#0FB9C5 0px 0px 10px"
            : "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        borderRadius: "2%",
        py: 1,
      }}
      onClick={() => setActive(review.id)}
    >
      <HeaderWithAvatar
        src={profile} ////Nous devons faire en sorte que les éléments ne soient pas trop imbriqués. 1 carte et toutes ses informations doivent être représentées comme 1 composant pour faciliter le travail à la fois de React et des autres collaborateurs.
        text={review.authorName}
        rating={review.rating}
      >
        <CustomTypography
          text={review.date.toString().slice(0, 10)}
          size={12}
          color="#757575"
        />
      </HeaderWithAvatar>
      <CommentView text={review.content} />
      <Stack sx={{ px: 1, py: 2 }}>
        <CustomTypography text=" 6 response" size={12} color="#0FB9C5" />
      </Stack>
    </Link>
  );
};

const ReviewsList = ({ reviews, active, setActive }) => (
  <Box
    sx={{
      px: 2,
      background: "#F8F8F8",
      display: "flex",
      height: { xl: "96%", md: 460 },
      overflowY: "scroll",
    }}
  >
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {reviews.map((item, index) => (
        <Grid item md={6} key={item.id}>
          <ReviewsListItem
            review={item}
            active={active}
            setActive={setActive}
          />
        </Grid>
      ))}
      <Stack sx={{ width: "100%", height: 20 }}></Stack>
    </Grid>
  </Box>
);
export default ReviewsList;
