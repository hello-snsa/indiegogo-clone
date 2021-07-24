import CarouselImageBox from "./CarouselImageBox";
import CarouselTicketPart from "./CarouselTicketPart";
import CleverThings from "./CleverThings";
import DonationPage from "./DonationPage";
import DonationPayment from "./DonationPayment";
import Footer from "./Footer";
import HomepageCollections from "./HomepageCollections";
import HomepageReview from "./HomepageReview";
import IntrestYou from "./IntrestYou";
import Navbar from "./Navbar";
import HomepagePopularProject from "./PopularProject";
import TakeRide from "./TakeRide";
import ThankYou from "./ThankYou";



export default function HomePage() {
  return (
    <>

<div className="mainDiv">

{/* <Navbar /> */}

<CarouselImageBox />
<CarouselTicketPart />
<HomepagePopularProject />
<HomepageCollections />

<TakeRide />
<IntrestYou />

<HomepageReview />

<CleverThings />



{/* <Footer /> */}

</div>{/* MainDiv */}
    </>
  );
}

