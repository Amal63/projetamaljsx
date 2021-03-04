import './App.css';
import sourceImage from "./source.jpg"
import ReactPlayer from 'react-player/youtube'
import './Style.css'
function App() {
  return (
    <div>
    <div className="App" style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">amal kobbi</h1>
      <span>
        <img src={sourceImage} alt ='' />
      </span>
      <span>
      <img src="/public.jpg" alt="" />
      </span>
    </div>
    <ReactPlayer url='https://www.youtube.com/embed/VRGXel-cyZA'/>
  </div>
  );
}
export default App;