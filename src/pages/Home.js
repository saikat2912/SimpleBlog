import React, { useEffect ,useState} from 'react'
import {getDocs,collection} from 'firebase/firestore'
import {auth, db} from '../firebase-config'
import {useNavigate} from "react-router-dom"

function Home() {

    const [postLists,setPostList] = useState([]);
    const postCollectionsRef= collection(db,"posts")

    const navigate=useNavigate();
    const sentToCreatePost =() =>{
        navigate("/createPost")
    }
    const getData=async() =>{
        const data= await getDocs(postCollectionsRef);
        setPostList(data.docs.map((doc) =>({...doc.data(),id:doc.id})))
    }

    useEffect(()=>{
        getData();
    })
  return (
    <div className='homePage'>
        <h2>Welcome {auth.currentUser.displayName}</h2>
        <div className="postList">
        {postLists.map((item)=>{
            return (<div>
            <h4>{item.title}</h4>
            <div><p>{item.postText}</p></div>
            </div>);
        })}
        </div>

    <div>
        <button onClick={sentToCreatePost}>Create Post</button>
    </div>
    </div>
  )
}

export default Home