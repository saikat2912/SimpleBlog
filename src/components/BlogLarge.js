import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import image1 from '../assests/image1.jpg'

function BlogLarge() {
  const [postLists, setPostList] = useState([]);
  const postCollectionsRef = collection(db, "posts");
  const [isVal, setIsVal] = useState(false);

  const getData = async () => {
    const data = await getDocs(postCollectionsRef);
    data.docs.map((doc) =>{
      console.log("the data to be read is ", doc)
    })
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsVal(true);
  };

  useEffect(() => {
    getData();
  }, isVal);
  return (
    <div>
      {postLists.map((items) => {
        return (
          <Card className="bg-dark text-white" key={items.id} style={{height:'300px',margin:'2rem'}}>
            <Card.Img src={image1} alt="Card image" style={{height:'300px',opacity:0.5}}/>
            <Card.ImgOverlay>
              <Card.Title>{items.title}</Card.Title>
              {console.log("post list is ",postLists)}
              <Card.Text>{items.postText.length>300?'Read More ':items.postText}</Card.Text>
              <Card.Text style={{bottom:'10px',position:'absolute'}}>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogLarge;
