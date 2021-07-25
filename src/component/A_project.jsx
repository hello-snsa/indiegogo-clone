import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./jsx/Navbar"
import "./Campaign.css"
import Footer from "./jsx/Footer"
export default function Aproject() {
    const [model1, setModel1] = useState("none")
    const [model2, setModel2] = useState("none")
    const [model1Co, setModel1Co] = useState(false)
    const [model2Co, setModel2Co] = useState(false)
    const [countryBank, setCountryBank] = useState([])
    const [bankCountry, setBankCountry] = useState("Select a Bank country")
    const [residence, setResidence] = useState("Select residence country")
    const [startbtncolor, setStartbtncolor] = useState("#c8c8c8")
    const Startbtncolor = {
        backgroundColor: `${startbtncolor}`
        
    }
    const model11 = {
        display: `${model1}`
        
    }
    const model12 = {
        display:`${model2}`
    }

    return <>
    <Navbar />
        <div className="ProtopDiv">
            <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.3,f_auto/homepage/crowdfunding-crowdsurfing_base.svg" alt="done"/>
        <h2>Let’s get ready to start your campaign!</h2>
        <h3>We want to create the best onboarding for you – please fill out the information below.<span style={{fontWeight:600,fontSize:20}}> Your answers will be locked for this campaign and can’t be changed later.</span></h3>
        </div>
        <div className="PromiddleDiv">
            <h4 style={{fontWeight:500}}>Who are you raising money for?</h4>
            <p>Please choose the type of account that will be receiving your funds.</p>
           
            <input type="checkbox" className="checkBox"></input>
           
                <label className="label mr-5">Individual</label>
           
           
            
            <input style={{ marginLeft: 20 }} type="checkbox" className="checkBox"></input>
            
            <label style={{marginTop:-50}} className="label">Business or Non Profit</label>
               
        </div>
        
        <div className="ProbottomDiv">
            <h4 style={{ fontWeight: 500 }}>Where are you located?</h4>
            <p>If you are raising funds as an individual, what is your country of legal residence? If you are raising funds for a business, where is the business headquartered? Learn more about country limitations.</p>
            <div ></div>
            <div onClick={() => {
                
                if (model1Co === false) {
                    setModel1("block")
                    setModel1Co(true)
                } else {
                    setModel1("none")
                    setModel1Co(false)
                }
            }} className="mainModel">
                <p style={{ marginLeft: 20, fontSize: 18, marginTop: 5 }}>{ residence}</p>
            </div>
            <div style={model11} className="mainModel1">
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["United States", "Other Countries"])
                    setResidence("United State")
                }}>United State</div>
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["Australia", "Other Countries"])
                    setResidence("Australia")
                }}>Australia</div>
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["United state", "Austria", "Belgium", "Denmark"])
                    setResidence("Austria")
                }}>Austria</div>
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["United state", "Austria", "Belgium", "Denmark", "Finland"])
                    setResidence("Belgium")
                }}>Belgium</div>
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["United State", "Canada", "Other Countries"])
                    setResidence("Canada")
                }}>Canada</div>
                <div onClick={() => {
                    setModel1("none")
                    setCountryBank(["United state", "Austria", "Belgium", "Denmark", "Finland"])
                    setResidence("Denmark")
                }}>Denmark</div></div>
        

        <div className="Probottom1Div">
            <h4 style={{ fontWeight: 500 }}>Where is your bank?</h4>
            <p>Your bank account location determines the currency in which you can raise funds.</p>
        </div>
            <div onClick={() => {
                if (model2Co === false) {
                    setModel2("block")
                    setModel2Co(true)
                } else {
                    setModel2("none")
                    setModel2Co(false)
                }
        }} className="Probottom2Div" >
                <p style={{ marginTop:20,marginLeft: 20, fontSize: 18,cursor:"pointer"  }}>{ bankCountry}</p>
        </div>
            <div style={model12} className="Probottom22Div">
                {countryBank.map(e => <div  onClick={() => {
                    setBankCountry(`${e}`)
                    setModel2("none")
                    setStartbtncolor("#7a69b3")
             }}>{ e}</div>)}
            </div>
             <Link to="CampaignForm">
            <button  className="startbtncolor">START MY CAMPAIGN</button>
             </Link>
            <div className="Probottom23Div">
                <h3 style={{marginBottom:-10,color:"#949494"}}>What countries are supported by Indiegogo?</h3>
                <div className="mt-5"></div>
                <p style={{color:"#949494"}}>You can start a campaign in countries supported by our payment processor. Learn more about potential options if your country is not supported at this time.</p>
            </div>
        </div>
        <Footer />
    </>
}