import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";

export const RatingView = ({ text, rating }) => (
  <Stack direction="row" spacing={2} sx={{ height: 19, alignItems: "center" }}>
    <CustomTypography text={text} color="#605076" />
    {rating && (
      <Rating value={rating} size="small" readOnly sx={{ color: "#F88122" }} />
    )}
  </Stack>
);

export const CommentView = ({ text }) => (
  <Stack
    sx={{
      maxHeight: 75,
      py: 1,
      px: 1,
      textOverflow: "ellipsis",
      overflow: "hidden",
    }}
  >
    <Typography
      variant="body2"
      sx={{ fontSize: 12, color: "#121212", textAlign: "left" }}
    >
      {text}
    </Typography>
  </Stack>
);

export const CustomTypography = ({ text, color = "#F88122", size = 14 }) => (
  <Typography
    sx={{
      color: color,
      fontSize: size,
      fontWeight: "semibold",
      textAlign: "left",
    }}
  >
    {text}
  </Typography>
);

export const HeaderWithAvatar = (props) => (
  <Stack
    sx={{ alignItems: "center", justifyContent: "space-between", px: 1 }}
    direction="row"
  >
    <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
      <img
        src={props.src}
        alt="Profile"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
        }}
      />
      <Stack>
        <RatingView text={props.text} rating={props.rating} />

        {props.bottomText && (
          <CustomTypography text={props.bottomText} size={10} color="#757575" />
        )}
      </Stack>
    </Stack>
    {props?.children}
  </Stack>
);

export const ReplyItem = React.memo(({ reply }) => (
  <Stack>
    <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
      <Avatar src={reply.image} />
      <CustomTypography text={reply.authorName} color="#605076" />
    </Stack>
    <CommentView text={reply.content} />
  </Stack>
));
