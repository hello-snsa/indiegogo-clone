
import './App.css';
import DonationPage from './Components/DonationPage';
import HomePage from './Components/HomePage';
import DonationPayment from './Components/DonationPayment'
import ThankYou from './Components/ThankYou'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>

<div className="mainDiv">
  <Navbar />
  
   <HomePage />


   {/* <DonationPage data="" /> */}

{/* <DonationPayment /> */}

{/* <ThankYou /> */}

   <Footer />
   </div>
   </> 
  );
}

export default App;
