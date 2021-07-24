
export default function Footer(){


    return(
        <>
    <div className="footerMainDiv">
        <div className="footerContainer">

        {/* upper part */}
        <div className="footerUpperPart">

        <div className="footerUpperPart1">
            <div className="footerUpperPartHeading">EXPLORE</div>
            <p>What we Do</p>
            <p>Funding</p>
            <p>GoFundMe</p>
        </div>
        <div className="footerUpperPart2">

            <div className="footerUpperPartHeading">ABOUT</div>
        
        <p>About US</p>
        <p>Blog</p>
        <p>Trust & Safety</p>
        <p>Help & Support</p>
        <p>Press</p>
        <p>Careers</p>
        <p>Contact</p>
        </div>
        <div className="footerUpperPart3">

            <div className="footerUpperPartHeading">ENTREPRENEURS</div>
        <p>How It Works</p>
        <p>Indiegogo vs. Kickstarter</p>
        <p>Education Center</p>
        <p>Experts Directory</p>
        <p>Fees</p>
        <p>Enterprise</p>
        <p>China</p>
        </div>
        <div className="footerUpperPart4">
            <div className="emailIconDiv">
                <img id="emailIcon" src="./emailIcon.png" alt="email Icon" />
            </div>
            <div className="footerUpperPart4HeaderDiv">
                <h3>Find it first on Indiegogo</h3>
                <p>Discover new and clever products in the Indiegogo newsletter</p>
            </div>

            <div className="footerUpperPart4FormDiv">
                <form name="footerForm" id="footerForm" >
                    <div>
                    <input name="footerFormEmail" id="footerFormEmail" type="email" placeholder="Your email address"></input>
                    </div>

<div className="flex margin-top-5 alignLeft">
    <div>
                    <input type="checkBox" className="footerCheckBox" />
                    </div>
                    <div>I agree to the <b> <span className="pink space"> Terms of Use </span> </b>and have read and understand the <b><span className="pink space"> Privacy Policy.</span></b>
                    </div>
</div>
<div>
                    <button id="footerFormSubmit">SIGN ME UP</button>
                    </div>
                </form>
            </div>

            
        </div>


        </div>



        {/* Middle part */}
        <div className="footerMiddlePart flex">

        <div className="fmpButtonDiv">
            <button id="fmpButton">₹ Indian Rupee (INR)</button>
        </div>

        <div className="footerSocialMediaDiv flex">
            <div id="footerFacebookIcon"><img src="./fbIcon.png" alt="icon" /></div>
            <div id="footerTwitterIcon"><img src="./twitterIcon.png" alt="icon" /></div>
            <div id="footerYoutubeIcon"><img src="./youtubeIcon.png" alt="youtube Icon" /></div>
            <div id="footerInstagramIcon"><img src="./igIcon.png" alt="icon" /></div>
            <div id="footerLinkdinIcon"><img src="./inIcon.png" alt="icon" /></div>
        
        </div>

        </div>

        {/* Bottom part */}
        <hr></hr>
        <div className="footerBottomPart flex">
            <div className="bbbDiv"><img src="https://www.indiegogo.com/images/bbbImage.png" alt="bbb acredation" />
                </div>
            <div className="footerLastLine flex">
          <p>  Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Do Not Sell My Personal Information</p>
            <p>Accessibility</p>
            <p>© 2021 Indiegogo, Inc. All Rights Reserved</p>
            </div>
        </div>


    </div>
    </div>
        </>
    )
}