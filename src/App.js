import './App.css';


// import { Navbar } from "./component/jsx/Navbar";
// import { Footer } from "./component/jsx/Footer";

import DonationPage from './Components/DonationPage';
import HomePage from './Components/HomePage';
import DonationPayment from './Components/DonationPayment'
import ThankYou from './Components/ThankYou'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";

import Body from './component/jsx/body';
// import Campaign from './component/Start_a_compaign';
import Campaign from './component/Start_a_compaign';
import Aproject from './component/A_project';
import Basic from './component/CampaignForm';
 

// import {Switch,Route} from "react-router-dom"
function App() {
 
 
  return (<>
   
    
    {/* <Navbar /> */}


    <Switch>
  <Route path='/' component={HomePage} exact />
  <Route path="/donationpage" component={DonationPage} exact />
  <Route path="/donationpayment" component={DonationPayment} exact />
  <Route path="/thankyou" component={ThankYou} exact />

  <Route path="/forentrepreneurs" component={Body} exact />
  <Route path="/body" component={Body} exact />
  <Route path="/startcampaign" component={Campaign} exact />
  <Route path="/Start_a_compaign" component={Campaign} exact />
  <Route path="/A_project" component={Aproject} exact />
  <Route path="/CampaignForm" component={Basic} exact />
 
 
   {/* <DonationPage data="" /> */}


{/* startcampaign */}
 </Switch> 
    
    {/* <Footer/> */}
    </>
  );
}

export default App;