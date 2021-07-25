import "../css/Navbar.css";
import React, { useState}from "react"
import Modal from "./Modal";
import Modal1 from "./Modal1";
import Aproject from "../A_project.jsx"
import Basic from "../CampaignForm.jsx"
import Campaign from '../Start_a_compaign';
 import { Body } from "./body";
// import Campaign from '../Start_a_compaign';
import { ExploreModal } from "./explore-modal"
import { Link,Route,Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";

export default function Navbar() {
    
    const [login, setLogin] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [exploreModal, setexploreModal] = useState(false)

    
    const handlechange = () => {
        setexploreModal(!exploreModal)
    }
  
    return (<>
         {/* <Router> */}
      {modalOpen && <Modal setOpenModal={setModalOpen} setOpenModal1={setModalOpen1} login={login} setLogin={setLogin}/>}
      {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1} setOpenModal={setModalOpen} />}
      {exploreModal && <ExploreModal setexploreModal={setexploreModal} exploreModal={ exploreModal}/>}

        <div className="upperdivnav">
          <Link to="/">  
          <button>
                Explore Indegogo
            </button>
            </Link>
            </div>
            <div className="parentdivnav">
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/cropped-logo@2x.png" alt="indigogo logo" />
                    <button onClick={handlechange}>
                        Explore
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <button >
                        What we do?
                        </button>
                    <i class="fa fa-search" aria-hidden="true"></i>
                
                <div className="innerdivnav">
                    <Link to="/forentrepreneurs">
                    <button >
                       For Enterpreneurs
                </button>
                </Link>

                 
                    <Link to="/Start_a_compaign">  <button >
                        Start a campaign
                        </button>
                   </Link> 
                    
                    
                
                    <button 
                            
                        onClick={() => {
                        setModalOpen(true)
                        }}
                        >
                    {login ? <button style={{fontWeight:"bold"}}>
                        <i class="fa fa-user" aria-hidden="true" style={{marginRight:"20px"}}></i>
                        Profile
                    </button>:"Login"}
                    </button >

                     
                     <button onClick={() => {
                        setModalOpen1(true)
                        }}>
                    { login ?"":"Signup"}
                </button>
                </div>
                
        </div>

        
      
            {/* <Switch>
                <Route path="/body" exact strict component={Body}><Body/></Route>
        <Route path="/Navbar" exact strict component={Navbar}><Navbar/></Route>
      <Route path="/Start_a_compaign" exact strict component={Campaign}><Campaign/></Route>
       <Route path="/A_project" exact strict component={Aproject}><Aproject/></Route>
        <Route path="/CampaignForm" exact strict component={Basic}><Basic /></Route> 
        </Switch> */}
    {/* </Router> */}
        </>
    )
}