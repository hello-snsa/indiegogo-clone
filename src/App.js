
import './App.css';

import ATempFile from './Components/ATempFile';
import Navbar from './Components/Navbar';
import CarouselImageBox from './Components/CarouselImageBox'
import CarouselTicketPart from './Components/CarouselTicketPart';
import Footer from './Components/Footer';
import HomepageCollections from './Components/HomepageCollections';
import TakeRide from './Components/TakeRide';
import IntrestYou from './Components/IntrestYou';

function App() {
  return (
    <>
{/* <ATempFile /> */}
<div className="mainDiv">

<Navbar />

<CarouselImageBox />
<CarouselTicketPart />
<HomepageCollections />

<TakeRide />
<IntrestYou />

<Footer />

</div>{/* MainDiv */}
    </>
  );
}

export default App;
