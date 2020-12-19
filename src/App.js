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
import SendUsMessage from './components/SendUsMessage';

import messageUs from './assets/Group 35686.svg'
import Group35650 from './assets/Group 35650.svg'
import Group35700 from './assets/Group 35700.svg'
import Path37456 from './assets/Path 37456.svg'
import Path37660 from './assets/Path 37660.svg'











function App() {
  return (
    <div className="App">
      <Navbar />



      <br />
      <div className="headings01">Web Design Web Development by SB</div>
      <div className="subheadings01">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</div>
      <div className="getStarted">
        <GetStartedButton />
      </div>
      <BackgroundRocket />

      <div className="page2">
        <Group35699 />
        <AboutUs />
        <OurServices />
      </div>
      <Designing />
      <div className="blue-dots">
        <img src={Group35650} alt="dots" />
      </div>
      <div className="page3">
        <Workflow />
        <CardColumn />
      </div>

      <div className="_3w-2b-tri">
        <img src={Group35700} alt="tirgs" />
      </div>

      <div className="page4">
        <CoreTechnologies />
        <Customers />
      </div>

      <div className="page5">
        <CaseStudies />


        <div className="footer">
          <Footer />
        </div>
      </div>

      <div className="page6">
        <div className="message-img">
          <img src={messageUs} alt="msgUs" />
        </div>
        <div className="msg-img-bg">
          <img src={Path37456} alt="bgmsg" />
        </div>

        <div className="triii">
          <img src={Path37660} alt="triy" />
        </div>
        <SendUsMessage />
      </div>


    </div>

  );
}

export default App;
