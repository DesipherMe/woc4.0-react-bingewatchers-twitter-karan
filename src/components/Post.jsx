import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, AccountIcon }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <AccountIcon fontSize="large" />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {/* <h3 > style={{ marginTop: "0" }} */}
              {displayName}{" "}
              <span>
                {verified && <VerifiedUserIcon className="postBadge" />}
              </span>
              <span className="postUserName"> @{userName}</span>
            </h3>
          </div>

          <div>
            <p className="postHeaderDescription">{text} </p>
          </div>
        </div>

        <img className="postImage" src={image} alt="NoImage" />

        <div className="postFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
