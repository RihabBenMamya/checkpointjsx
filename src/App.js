import imageInSrc from './imageInSrc.jpg';
import './App.css';
import "./styles.css";


function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
     

<h1 class="title red">Your name here</h1>
<br/>
<img className="image" src={imageInSrc} alt="imageInSrc" />

<br/>



<img className="image" src="/imageInPublic.jpg" alt="imagePublic" />

    
    </div>
    <video width="320" height="240" controls>

    <source src="/myVideo.mp4" type="video/mp4" />
   
   </video>
   </>
  );
}

export default App;
