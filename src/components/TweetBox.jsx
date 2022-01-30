import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "@material-ui/core";
import db from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.

function TweetBox() {
  const [tweetInfo, setTweetInfo] = useState({
    Tweet: "",
    Image: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTweetInfo((prevValue) => {
      if (name === "Tweet") {
        return {
          Tweet: value,
          Image: prevValue.Image
        };
      } else if (name === "Image") {
        return {
          Tweet: prevValue.Tweet,
          Image: value
        };
      }
    });
  }

  function sendTweet(event) {
    event.preventDefault();
    setTweetInfo(tweetInfo);

    const postCollectionRef = collection(db, "posts");

    addDoc(postCollectionRef, {
      displayName: "Karan Solanki",
      userName: "karanSolanki",
      verified: true,
      text: tweetInfo.Tweet,
      image: tweetInfo.Image
    });

    setTweetInfo({
      Tweet: "",
      Image: ""
    });
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetboxInput">
          <AccountCircleIcon />
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's Happeninig?"
            name="Tweet"
            value={tweetInfo.Tweet}
          />
        </div>
        <input
          onChange={handleChange}
          className="tweetBoxImageInput"
          placeholder="Optional : Enter Image URL."
          type="text"
          name="Image"
          value={tweetInfo.Image}
        />
        <Button onClick={sendTweet} type="submit" className="tweetboxButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
