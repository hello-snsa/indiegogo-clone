import styled from 'styled-components'
import React from "react"

import {CarouselContainer} from "./carousel"
// import {Navbar}  from "./Navbar"
import Navbar  from "./Navbar"
import Footer from './Footer'
import { Link } from 'react-router-dom'


const ParentDiv = styled.div`
    font-family: benton-sans,Helvetica,Arial,"sans-serif";
`

const DIV = styled.div`
width: 800px;
height: 531px;
margin: auto;
margin-top: 50px;

img{
    width:50px;
    height:50px;
    margin-left: 100px;
}
.div1{
    width: 45%;
    margin-top: 70px;
}
.div1 h2{
    font-size: 20px;
    font-weight: 600;
    margin-left: -40px;
    margin-top: 20px;
}
.div1 h4{
    font-size: 16px;
    word-spacing: 2px;
    font-weight: 400;
    text-align: left;
    font-weight: bolder;
    margin-top: 50px;
}
.div1 h9{
    font-size: 14px;
    text-align: left;
    padding-bottom: 30px;
    color: rgb(250,22,129);
    padding-top: 50px;

}
.div1 h9:hover{
    cursor: pointer;
}
.outerdiv{
    display: flex;
}

`
const Experts = styled.div`
    width: 99%;
    height: 493px;
    background-color: rgb(245,245,245);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


img{
    width: 1140px;
    height: 313px;
}
h4{
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
}
button{
    background-color: rgb(250,22,129);
    color: white;
    border: none;
    width: 157px;
    height: 40px;
    padding: 8px 20px;
    font-weight: bolder;
    margin-top: 20px;
}
`
const H2 = styled.h2`
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    margin-top: 50px;
    margin-bottom: 50px;
`
const Div2 = styled.div`
    width: 45vw;
    height: 210px;
    margin: auto;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    justify-content: center;
    grid-gap: 20px;


    div{
        border: 1px solid #dfd8d8;
    }
    img{
        width:60px;
        height: 60px;
        margin:30px 55px;
    }
    h4{
        font-size: 15px;
        padding: 10px 20px;
        text-align: center;
    }
`

const Div3 = styled.div`
    width: 99vw;
    height: 289px;
    background-color: rgb(42,42,42);
    color: white;
    margin-top: 50px;
    text-align: center;

    div{
        width: 730px;
        margin: auto;
    }
   .innerh h4{
       margin-bottom: 40px;
       word-spacing: 2px;
       font-weight:400;
    }
    .innerh button{
        width: 169px;
        height: 35px;
        padding: 6px 12px;
        background-color: rgb(250,22,129);
        color: white;
        border: none;
        font-weight: bolder;
    }
    button:hover{
        cursor: pointer;
    }
    `

const Div4 = styled.div`
        width: 60vw;
        height: 520px;
        margin: auto;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 3%;
        text-align: center;
        font-size: 16px;


        img{
            width: 100%;
            height: 70%;
            margin-bottom: 20px;
        }

       .success span{
            font-size: 16px;
            color:rgb(250,22,129) ;
        }
    `

const Div5 = styled.div`
        width: 99vw;
        height: 386px;
        background-color: rgb(245,245,245);
        padding: 30px;

        h2{
            text-align: center;
        }
        
    `
const Div6 = styled.div`
        width: 60vw;
        height: 163px;
        margin: auto;
        margin-top: 50px;
        display: grid;
        grid-template-columns: 22% 22% 22% 22%;
        grid-gap: 3%;        
        

   
    h2{
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4em;
    margin-top: 20px;
    color:rgb(250,22,129) ;
    }
    h4{
        font-size: 20px;
        font-weight: 300;
        text-align: center;

    }

`

const H4 = styled.h4`
        font-size: 24px;
        font-weight: 400;
        text-align: center;
`

const Div7 = styled.div`
        width: 55vw;
        height: 336px;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 3%;
        margin: auto;
        margin-top: 50px;
        margin-bottom: 80px;

    div{
        border: 1px solid #d1c9c9;
        padding: 15px;
    }

    img{
        width: 60px;
        height: 60px;
        margin: 30px 20px;
        margin-left: 100px;
    }
    h4{
        font-size: 20px;
    }
    h9{
        font-size:16px;
        font-weight: 300;
    }
    h3{
        margin-top: 40px;
        font-size: 15px;
        font-weight: bolder;
        color:rgb(250,22,129);
    }
    h3:hover{
        cursor: pointer;
        color: brown;
        border-bottom: 2px solid brown;
    }
`

export default function Body() {
    return (
    
    <>

    <Navbar />
        <CarouselContainer/>
        <ParentDiv>
            
            <DIV>
                <h2 style={{
                    textAlign: "center", fontSize: "30px", fontWeight: "bolder"
                }}>
                    Dream it. Fund it. Make it. Ship it.
                    We help at every step from concept to market.
                </h2>
                <div className="outerdiv">
                    <div className="div1" style={{ marginRight: "200px" }}>
                        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-crowdfunding-50px@2x-e1515528474613.png" alt="crowdfunding" />
                        <h2>CROWDFUNDING</h2>
                        <h4>Raise funds with a crowdfunding</h4>
                        <h8>Acquire starter capital and validate your idea by tapping into Indiegogo’s global network of early adopters.</h8>
                        <br />
                        <br />
                        <br />
                      <Link to="/Start_a_compaign">
                            <h9>START A CAMPAIGN</h9>
                          </Link>
                    </div>
                    <div className="div1">
                        <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/08/IGG_entrepreneur-site-indemand-50px@2x.png" alt="image1" />
                        <h2>INDEMAND</h2>
                        <h4>Extend your campaign with InDemand</h4>
                        <h8>After your crowdfunding campaign, continue raising money and building your community with InDemand. No fundraising target, no deadline limits.</h8>
                        <br />
                        <br />
                        <br />
                        <h9>ACCESS INDEMAND</h9>
                    </div>
                </div>
            </DIV>
            <Experts>
                <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2021/04/ED1-1.png" alt="experts" />
                <h4>Find Indiegogo-vetted companies to help you launch your campaign and take your product to market.</h4>
                <button>FIND EXPERTS</button>
            </Experts>
            <H2>All the Right Experts to Help Your Business</H2>
            <Div2>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-retail-licensing-distribution-50x50-@2x.png  " alt="experts" />
                    <h4>Creative Services</h4>
                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-prototyping-and-production-@2x.png" alt="experts" />
                    <h4>Fullfilment</h4>
                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-marketing-50px@2x.png" alt="experts" />
                    <h4>Maerketing and Management</h4>
                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-fulfillment-50px@2x.png" alt="experts" />
                    <h4>Protoytpe & Production</h4>
                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_experts-directory-creative-services-@2x.png" alt="experts" />
                    <h4>Retail , licensing and distribution</h4>
                </div>
            </Div2>
            <Div3>
                <div className="innerh">
                    <h3 style={{ paddingTop: "30px", fontSize: "15px" }}>Ready to Start Your Business?</h3>
                    <h2>Get the Essential Crowdfunding Field Guide</h2>
                    <h4>We worked with our Campaign Strategists to compile all the best practices and inspiring examples of a great crowdfunding experience.

                    </h4>
                    <button>READ THE GUIDE</button>
                </div>
            </Div3>
            <H2>Sucess Stories</H2>
            <Div4>
                <div className="success">
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_nomaticbag.jpg" alt="success" />
                    <h9>The NOMATIC travel bag is shipping their products worldwide to 7K backers after raising $3M in crowdfunding on Indiegogo.<span>Learn More</span> </h9>
                </div>
                <div className="success">
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/04/IGG_HowItWorks_SuccessStories_387x387px_hyperdrive2.jpg" alt="success" />
                    <h9>HyperDrive Thunderbolt 3 USB-C Hub for MacBook Pro raised $1M+ on InDemand, by targeting outreach to grow a loyal community of backers.<span>Learn More</span> </h9>
                </div>
                <div className="success">
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HowItWorks_SuccessStories_387x387px_bullrest1.jpg" alt="success" />
                    <h9>After raising $381K on Indiegogo, BullRest - the reinvented travel pillow - launched on Indiegogo Product Marketplace with guaranteed shipping.<span>Learn More</span> </h9>
                </div>

            </Div4>
            <Div5>
                <h2>Project by project,</h2>
                <h2>we're changing the way new ideas come to life.</h2>
                <Div6>
                    <div>
                        <h2>
                            1B+
                        </h2>
                        <h4>
                            Total raised across all projects, from dance to design.
                        </h4>
                    </div>
                    <div>
                        <h2>
                            11MM+
                        </h2>
                        <h4>
                        Contributions from our amazing community of backers for 650k+ projects.
                        </h4>
                    </div>
                    <div>
                        <h2>
                            223
                        </h2>
                        <h4>
                        Countries & territories are home to Indiegogo users.
                        </h4>
                    </div>
                    <div>
                        <h2>
                            18,983%
                        </h2>
                        <h4>
                        The most a campaign has exceeded its goal … so far!
                        </h4>
                    </div>
                </Div6>
            </Div5>
            <H2>
                Ready To Go ?
            </H2>
            <H4>
                You're only a step away from kicking off your entrepreneurial adventure on
            </H4>
            <H4>Indiegogo. Here's where to go next:</H4>

            <Div7>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-crowdfunding-80px@2x-e1515527153625.png" alt="ready" />
                    <h4>Start a Campaign</h4>
                    <h9>Take the plunge with our guided campaign-creation tool. It’s free, and you can easily start now and finish later.</h9>
                    <Link to="/Start_a_compaign">    <h3>GET STARTED</h3>
                    </Link>
                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-experts-directory-80px@2x.png" alt="ready" />
                    <h4>Experts Directory
                    </h4>
                    <h9>Take your idea further with these experienced companies recommended by Indiegogo campaigners and staff.

                    </h9>
                    <h3>FIND SUPPORT</h3>

                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-Education-center-80px@2x.png" alt="ready" />
                    <h4>Education Center</h4>
                    <h9>Find everything you need for a successful campaign in one convenient location.</h9>
                    <h3>EXPLORE OUR RESOURCES</h3>

                </div>
                <div>
                    <img src="https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_entrepreneur-site-IGGvsKS-80px@2x.png" alt="ready" />
                    <h4>Indiegogo vs Kickstarter</h4>
                    <h9>Learn about the benefits of choosing Indiegogo for your idea. See our detailed breakdown.</h9>
                    <h3>GET INFORMED</h3>

                </div>
            </Div7>
        </ParentDiv>
        <Footer />
        </>
    )
}
export {Body}