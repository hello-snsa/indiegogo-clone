
import './App.css';

import ATempFile from './Components/ATempFile';
import Navbar from './Components/Navbar';
import CarouselImageBox from './Components/CarouselImageBox'
import CarouselTicketPart from './Components/CarouselTicketPart';
import Footer from './Components/Footer';
import HomepageCollections from './Components/HomepageCollections';
import TakeRide from './Components/TakeRide';
import IntrestYou from './Components/IntrestYou';
import CleverThings from './Components/CleverThings';
import HomepageReview from './Components/HomepageReview';
import HomepagePopularProject from './Components/PopularProject';
import DonationPage from './Components/DonationPage';
import DonationPayment from './Components/DonationPayment';

function App() {
  return (
    <>
{/* <ATempFile /> */}
<div className="mainDiv">

<Navbar />

<CarouselImageBox />
<CarouselTicketPart />
<HomepagePopularProject />
<HomepageCollections />

<TakeRide />
<IntrestYou />

<HomepageReview />

<CleverThings />

<DonationPage data="" />

<DonationPayment />

<Footer />

</div>{/* MainDiv */}
    </>
  );
}

export default App;
