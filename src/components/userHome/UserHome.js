import { useState } from "react";
import Button from "../Button";
import Post from "./Post";

function getPosts() {
  return [
    {
      id: 1,
      name: "People",
      text: "Post 1",
    },
    {
      id: 2,
      name: "People2",
      text: "Post 2",
    },
    {
      id: 3,
      name: "People3",
      text: "Post 3",
    },
  ];
}

const UserHome = ({ userProp }) => {
  const [posts, updatePosts] = useState(getPosts);

  return (
    <div>
      <Button text="CreatePost" link="/createPost"/>
      {posts.map((post,index) => (
        <Post key={index} post={post}/>
      ))}
    </div>
  );
};

export default UserHome;
