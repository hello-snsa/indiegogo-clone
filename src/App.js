
import './App.css';
import DonationPage from './Components/DonationPage';
import HomePage from './Components/HomePage';
import DonationPayment from './Components/DonationPayment'
import ThankYou from './Components/ThankYou'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>

<div className="mainDiv">

  <Navbar />

  <Switch>
  <Route path='/' component={HomePage} exact />
  <Route path="/donationpage" component={DonationPage} exact />
  <Route path="/donationpayment" component={DonationPayment} exact />
  <Route path="/thankyou" component={ThankYou} exact />
 
 
   {/* <DonationPage data="" /> */}



 </Switch> 

   <Footer />
   </div>
   </> 
  );
}

export default App;
