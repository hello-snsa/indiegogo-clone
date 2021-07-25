import { Link } from "react-router-dom";

export default function Navbar(){

   
        return(
            <>
    
    <div className="navBarMainDiv">
    
            <div className="navBarLeftDiv">
    
            <div className="companyLogoDiv">
            <Link to="/"> 
               <img src="./logo.png" alt="companyLogo"/>
               </Link>
            </div>
    
            <div className="exploreDiv">
                <p onClick={""}>Explore<img src="./downArrow.png" alt="down Arrow" /></p>
                {/* <button className="navBarButton" id="explore" onclick="" >Explore<img src="./downArrow.png" alt="down Arrow" /></button> */}
            </div>
    
            <div className="whatWeDoDiv">
            <p onClick={""}>What We Do</p>
    
            {/* <button className="navBarButton" id="whatWeDo" onclick="" >What We Do</button> */}
            </div>
            <div className="navBarSearchBar">
                <img src="./searchIcon.png" alt="search Icon" />
    
            </div>
    
    
    
    
            </div>
    
    
    
    
    <div className="navBarRightDiv">
    
    <div className="forEntrepreneursDiv">
    <Link to="/forentrepreneurs"> 
    {/* <p >For Entrepreneurs</p> */}
        <button className="navBarButton" id="forEntrepreneurs" onclick="">For Entrepreneurs</button>
    
        </Link>
    
        </div>
    
    <div className="startACampaignDiv">
    <Link to="/startcampaign"> 
    {/* <p >Start a Campaign</p> */}
        <button className="navBarButton" id="startACampaign" >Start a Campaign</button>
        </Link>
    </div>
    
    
    <div class="horizontalLine"></div>
    
    <div className="loginDiv">
    
    <p onClick={""}>Log In</p>
        {/* <button className="navBarButton" id="login" onclick="">Log In</button> */}
        
    </div>
    
    <div className="signUpDiv">
    <p onClick={""}>Sign Up</p>
        {/* <button className="navBarButton" id="signUp" onclick="">Sign Up</button> */}
        
        </div>
    
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>{/* navBarMainDiv */}
            </>
        )
    
    
    }
    
    