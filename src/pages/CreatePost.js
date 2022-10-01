import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CreatePost({ isAuth }) {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionsRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionsRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigation("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigation("/login");
    }
  });

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-5"

            >
              <Form.Control type="text" placeholder="Title" onChange={(event)=>{setTitle(event.target.value)}}/>
            </FloatingLabel>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Write your text">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={(event)=>{setPostText(event.target.value)}}
            />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer style={{marginTop:'30px'}}>
          <Button variant="secondary" style={{marginRight:'5px'}}>Close</Button>
          <Button variant="primary" style={{marginRight:'5px'}} onClick={createPost}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CreatePost;
