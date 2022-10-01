import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assests/image1.jpg'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'

function MidHome(sentToCreatePost) {
  return (
    <Carousel fade>
      <Carousel.Item style={{height:'40%',width:'100%'}}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption style={{color:'#ffc500'}}>
        <h3>Create a Blog Now</h3>
          <button onClick={sentToCreatePost}>Create Post</button>
          <p>"If there's a book that you want to read, but it hasn't been written yet, then you must write it."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'40%',width:'100%'}}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption style={{color:'#ffc500'}}>
          <h3>Create a Blog Now</h3>
          <button onClick={sentToCreatePost}>Create Post</button>
          <p>"If there's a book that you want to read, but it hasn't been written yet, then you must write it."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'40%',width:'100%'}}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
         
        />

        <Carousel.Caption style={{color:'#ffc500'}}>
        <h3>Create a Blog Now</h3>
          <button onClick={sentToCreatePost}>Create Post</button>
          <p>
          "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MidHome;