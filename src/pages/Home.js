import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import MidHome from "../components/MidHome";
import Blogs from "../components/Blogs";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Home() {
  const [postLists, setPostList] = useState([]);
  const postCollectionsRef = collection(db, "posts");
  const [isVal, setIsVal] = useState(false);

  const navigate = useNavigate();
  const sentToCreatePost = () => {
    navigate("/createPost");
  };
  const getData = async () => {
    const data = await getDocs(postCollectionsRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsVal(true);
  };

  useEffect(() => {
    getData();
  }, isVal);
  return (
    <div className="homePage">
      <div>
        <MidHome sentToCreatePost={sentToCreatePost}/>
      </div>
      <div className="postList" style={{ height: "500px" }}>
        {console.log("postlists is ", postLists)}
        <Row>
          {postLists.map((item) => {
            return (
                 <Blogs item={item} />
               
            );
          })}
        </Row>
      </div>
      <div>
        <button onClick={sentToCreatePost}>Create Post</button>
      </div>
    </div>
  );
}

export default Home;
