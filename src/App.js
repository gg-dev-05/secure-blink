import './App.css';
import heading1 from './assets/Web Design Web Development by SB.svg'
import subheading1 from './assets/Our products are fully custom-made, built with the latest technologies and cloud-architectures..svg'
import Navbar from "./components/Navbar";
import GetStartedButton from "./components/GetStartedButton";
import BackgroundRocket from "./components/BackgroundRocket";




function App() {
  return (
    <div className="App">
      <Navbar />
      <img id="heading1" src={heading1} />
      <br />
      <img id="subheading1" src={subheading1} />
      <div className="getStarted">
        <GetStartedButton />
      </div>
      <BackgroundRocket />
    </div>
  );
}

export default App;
