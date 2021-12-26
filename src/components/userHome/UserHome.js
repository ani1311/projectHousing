import { useState, useEffect } from "react";
import Button from "../Button";
import Post from "./Post";
import firebaseConfig from "../../firebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const UserHome = ({ userProp }) => {
  const [posts, updatePosts] = useState([]);

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseDatabase = getDatabase(firebaseApp);


  useEffect(() => {
    onValue(
      ref(firebaseDatabase, "posts"),
      (snapshot) => {
        const data = snapshot.val();
        let allPosts = [];
        for (const [key, value] of Object.entries(data)) {
          allPosts.push({ ...value, key: key });
        }
        updatePosts(allPosts);
      }
    );
  },[]);


  return (
    <div>
      <Button text="CreatePost" link="/createPost" />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default UserHome;
