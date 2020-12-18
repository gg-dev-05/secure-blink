import './App.css';

import Navbar from "./components/Navbar";
import GetStartedButton from "./components/GetStartedButton";
import BackgroundRocket from "./components/BackgroundRocket";
import Group35699 from './components/Group35699'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Designing from './components/Designing'
import Workflow from './components/Workflow'
import CardColumn from './components/CardColumn'
import CoreTechnologies from './components/CoreTechnologies'
import Customers from './components/Customers'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

import heading1 from './assets/Web Design Web Development by SB.svg'
import subheading1 from './assets/Our products are fully custom-made, built with the latest technologies and cloud-architectures..svg'
import messageUs from './assets/Group 35686.svg'
import SendUsMessage from './components/SendUsMessage';









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

      <div className="page2">
        <Group35699 />
        <AboutUs />
        <OurServices />
        <Designing />
      </div>

      <div className="page3">
        <Workflow />
        <CardColumn />
      </div>

      <div className="page4">
        <CoreTechnologies />
        <Customers />
      </div>

      <div className="page5">
        <CaseStudies />
      </div>

      <div className="page6">
        <div className="message-img">
          <img src={messageUs} />
        </div>

        {/* <SendUsMessage /> */}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>

  );
}

export default App;
