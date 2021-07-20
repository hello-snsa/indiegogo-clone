
export default function Navbar(){

function alertit(){
    alert("'heelo'")
}
    return(
        <>

<div className="navBarMainDiv">

        <div className="navBarLeftDiv">

        <div className="companyLogoDiv">
            <img src="./logo.png" alt="companyLogo"/>
        </div>

        <div className="exploreDiv">
            <button className="navBarButton" id="explore" onclick="" >Explore<img src="./downArrow.pngs" alt="down Arrow" /></button>
        </div>

        <div className="whatWeDoDiv">
        <button className="navBarButton" id="whatWeDo" onclick="" >What We Do</button>
        </div>
        <div className="navBarSearchBar">
            <img src="./searchIcon.pngs" alt="search Icon" />

        </div>




        </div>




<div className="navBarRightDiv">

<div className="forEntrepreneursDiv">
<p onClick={alertit}>hello</p>
    <button className="navBarButton" id="forEntrepreneurs" onclick="">For Entrepreneurs</button>

    

    </div>

<div className="startACampaignDiv">

    <button className="navBarButton" id="startACampaign" >Start a Campaign</button>
</div>


<div class="horizontalLine"></div>

<div className="loginDiv">

    <button className="navBarButton" id="login" onclick="">Log In</button>
</div>

<div className="signUpDiv">
    <button className="navBarButton" id="signUp" onclick="">Sign Up</button>
    
    </div>


</div>












</div>{/* navBarMainDiv */}
        </>
    )


}

