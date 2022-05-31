import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Delete from "./../../../assets/icons/delete.svg";
import reply from "./../../../assets/icons/reply.svg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./style.css";
import { CommentView, HeaderWithAvatar  , ReplyItem } from "./commentWidget";

const ReviewsActionButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  return (
    <Box>
      <IconButton variant="contained" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popper placement="left-start" open={open} anchorEl={anchorEl}>
        <Paper>
          <Button
            variant="outlined"
            startIcon={
              <Avatar
                src={Delete}
                sx={{ borderRadius: 0, height: 14, width: 10 }}
              />
            }
            sx={{
              border: "none",
              color: "#FD7575",
              textTransform: "none",
              fontSize: 12,
            }}
          >
            Delete
          </Button>
        </Paper>
      </Popper>
    </Box>
  );
};

const SelectReview = ({ review, replies, setReplies }) => {
  const [text, setText] = React.useState("");

  const handleSubmit = () => {
    setReplies({
      reviewID: review.id,
      content: text,
      id: replies.length,
      authorProfile: review.image,
      date: review.date,
      authorName: "Silvere ds",
    });
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Stack sx={{ height: { md: 370, xl: "80%" }, overflowY: "scroll" }}>
        <Stack>
          <Stack sx={{ height: 70, justifyContent: "center" }}>
            <HeaderWithAvatar
              src={review.authorProfile}
              text={review.authorName}
              rating={review.rating}
              bottomText={review.date.toString().slice(0, 10)}
            >
              <ReviewsActionButton />
            </HeaderWithAvatar>
          </Stack>
          <CommentView text={review.content} />
        </Stack>
        <Stack sx={{mt:2,paddingLeft:5,pb:3}} spacing={2}>
            {
                replies.map((reply,index)=><ReplyItem key={index} reply={reply} />)
            }
        </Stack>
      </Stack>
      <Box
        sx={{
          height: "30%",
          widtn: "100%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 0px 4px 0px",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", px: 2, pt: 1 }}>
          <Avatar
            src={reply}
            sx={{ borderRadius: 0, height: 20, width: 20, color: "#5D5C5C" }}
          />
          <Typography
            sx={{
              color: "#5D5C5C",
              fontSize: 14,
              fontWeight: "semibold",
            }}
          >
            Reply
          </Typography>
        </Stack>
        <Stack sx={{ px: 2, pt: 1 }}>
          <textarea
            onChange={handleChange}
            style={{
              background: "#F8F8F8",
              border: "none",
              fontSize: 14,
              color: "#5D5C5C",
              minHeight: "80px",
              maxHeight: "80px",
              minWidth: "100%",
              maxWidth: "100%",
            }}
          />
          <Stack
            sx={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              mt: 2,
              px: 1,
            }}
          >
            <Button
              sx={{
                background: "#AEAEAE",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
                color: "#FFFFFF",
                fontSize: 14,
                textTransform: "none",
                width: "40%",
                "&:hover": { background: "#AEAEAE" },
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default SelectReview;
