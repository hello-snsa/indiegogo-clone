import { useState } from "react"
import { Link } from "react-router-dom"

import "./Campaign.css"
import Navbar from "./jsx/Navbar"
import Footer from "./jsx/Footer"

export default function Campaign() {
    
    const [indColor, setIndColor] = useState("#c8c8c8")
     const [fundColor,setFundColor]=useState("#c8c8c8")
    const indStyles={
        fontWeight: 600,
  color:`${indColor}`
    }
     const fundStyles={
  fontWeight: 600,
  color:`${fundColor}`
}
    return( <> 
    
    <Navbar />
    
    <div className="mainDiv">
        <img src="https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.3,f_auto/homepage/crowdfunding-crowdsurfing_base.svg" alt="done"/>
        <h2 className="heading">Welcome to Indiegogo</h2>
        <h2 className="heading2">What are you crowdfunding for?</h2>
        
    </div>
        <div className="mainDiv2">
            <Link to="/A_project">
            <div onMouseEnter={() => {
                setIndColor("#e51075")
            }}
            onMouseLeave={()=>{setIndColor("#c8c8c8")}}    className="projectDiv">
                    <h3 style={{ fontWeight: 550,marginTop:20 }}>A project</h3>
                <h3 style={{fontSize:16,fontWeight:400,marginBottom:30}}>Indiegogo is a Crowdfunding platform helping enterpreneurial ideas come to life</h3>
                <div style={{display:"flex",marginLeft:130}}>
                    <h4 style={{fontSize:16,color:"#c8c8c8",marginBottom:30}}>5% platform fee</h4>
                    <div className="Qmark">?</div>
                </div>
                <h2 style={indStyles}>INDIEGOGO</h2>
                </div>
                </Link>
            <div onMouseEnter={() => {
                setFundColor("#00b964")
            }}
            onMouseLeave={()=>{setFundColor("#c8c8c8")}} className="projectDiv">
                <h3 style={{ fontWeight: 550,marginTop:20 }}>A cause</h3>
                <h3 style={{fontSize:16,fontWeight:400,marginBottom:30}}>GoFundMe is the world's largest and most trusted free social fundraising platform.</h3>
                <div style={{display:"flex",marginLeft:130}}>
                    <h4 style={{fontSize:16,color:"#c8c8c8",marginBottom:30}}>0% platform fee</h4>
                    <div className="Qmark">?</div>
                </div>
                <h2 style={fundStyles} >GOFUNDME</h2>
            </div>
        </div>
        <Footer />
        
        </>
    )
}