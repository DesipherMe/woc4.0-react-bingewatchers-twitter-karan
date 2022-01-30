// eslint-disable-next-line

import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Post from "./Post";
import db from "../firebase.js";
// import {collection, getDocs} from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  // const postCollectionRef = collection(db, 'posts');

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts"),
        (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()));
        },
        (error) => {
          console.log(error);
        }
      ),
    []
  );

  return (
    <div className="feed">
      {/* Header */}
      <div className="feedHeader">
        <h3>Home</h3>
      </div>

      {/* TweeetBox */}
      <TweetBox />

      {console.log(posts)}
      {posts.map((post) => {
        return (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            AccountIcon={AccountCircleIcon}
          />
        );
      })}

      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
