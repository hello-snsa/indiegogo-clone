import "../css/Footer.css"
import styled from "styled-components"

const P = styled.h4`
    font-size: 14px;
`

function Footer() {

    return(
        <>
    <div className="footerMainDiv">
        <div className="footerContainer">
​
        {/* upper part */}
        <div className="footerUpperPart">
​
        <div className="footerUpperPart1">
            <div className="footerUpperPartHeading">EXPLORE</div>
            <P>What we Do</P>
            <P>Funding</P>
            <P>GoFundMe</P>
        </div>
        <div className="footerUpperPart2">
​
            <div className="footerUpperPartHeading">ABOUT</div>
        
        <P>About US</P>
        <P>Blog</P>
        <P>Trust & Safety</P>
        <P>Help & Support</P>
        <P>Press</P>
        <P>Careers</P>
        <P>Contact</P>
        </div>
        <div className="footerUpperPart3">
​
            <div className="footerUpperPartHeading">ENTREPRENEURS</div>
        <P>How It Works</P>
        <P>Indiegogo vs. Kickstarter</P>
        <P>Education Center</P>
        <P>Experts Directory</P>
        <P>Fees</P>
        <P>Enterprise</P>
        <P>China</P>
        </div>
        <div className="footerUpperPart4">
            <div className="emailIconDiv">
                <img id="emailIcon" src="./emailIcon.png" alt="email Icon" />
            </div>
            <div className="footerUpperPart4HeaderDiv">
                <h3>Find it first on Indiegogo</h3>
                <P>Discover new and clever products in the Indiegogo newsletter</P>
            </div>
​
            <div className="footerUpperPart4FormDiv">
                <form name="footerForm" id="footerForm" >
                    <div>
                    <input name="footerFormEmail" id="footerFormEmail" type="email" placeholder="Your email address"></input>
                    </div>
​
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
​
            
        </div>
​
​
        </div>
​
​
​
        {/* Middle part */}
        <div className="footerMiddlePart flex">
​
        <div className="fmpButtonDiv">
            <button id="fmpButton">₹ Indian Rupee (INR)</button>
        </div>
​
        <div className="footerSocialMediaDiv flex">
            <div id="footerFacebookIcon"><img src="./facebookIcon" alt="icon" /></div>
            <div id="footerTwitterIcon"><img src="./twitterIcon." alt="icon" /></div>
            <div id="footerYoutubeIcon"><img src="./" alt="icon" /></div>
            <div id="footerInstagramIcon"><img src="" alt="icon" /></div>
            <div id="footerLinkdinIcon"><img src="" alt="icon" /></div>
        
        </div>
​
        </div>
​
        {/* Bottom part */}
        <hr></hr>
        <div className="footerBottomPart flex">
            <div className="bbbDiv"><img src="https://www.indiegogo.com/images/bbbImage.png" alt="bbb acredation" />
                </div>
            <div className="footerLastLine flex">
            <P>Terms of Use</P>
            <P>Privacy Policy</P>
            <P>Cookie Policy</P>
            <P>Do Not Sell My Personal Information</P>
            <P>Accessibility</P>
            <P>© 2021 Indiegogo, Inc. All Rights Reserved</P>
            </div>
        </div>
​
​
    </div>
    </div>
        </>
    )
}

export default Footer;