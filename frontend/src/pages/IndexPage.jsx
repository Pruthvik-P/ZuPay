import Post from "../components/Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://myblog-jjhd.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
      console.log(posts);
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}