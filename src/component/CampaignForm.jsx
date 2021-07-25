import { useState } from "react"
import "./Campaign.css"
import FundingForm from "./FundingForm.jsx"
import BasicForm from "./Basic"
import Navbar from "./jsx/Navbar"
import Footer from "./jsx/Footer"
import { Link } from "react-router-dom"
export default function Basic() {
    const [editorExtend, setEditorExtend] = useState("none")
    const [editorExtendco, setEditorExtendco] = useState(false)
     const [resourceExtend, setresourceExtend] = useState("none")
    const [resourceExtendco, setresourceExtendco] = useState(false)
    const [form, setForm] = useState(true)
    const [formhead, setFormhead] = useState("Basic")
    const [modal, setModal] = useState("none")
    const [payload, setPayload] = useState([])
      const[titleborderColor,setTitlebordorColor]=useState("black")
    const EditorExtend = {
        display:`${editorExtend}`
    }
    const ResourceExtend = {
        display:`${resourceExtend}`
    }

    const modall = {
        display:`${modal}`
    }
     

    const handlesavenext = (item) => {
       
        if(item.Title.length===0){
            setTitlebordorColor("red")

        } else {
             setForm(false)
        setFormhead("Funding")
        setPayload(item)
        }
    }

    const handlesavenext2 = () => {
        setModal("block")
    }
    return <>

    <Navbar />
        <div className="BasicMainDiv">
        <div className="BasicLeftMainDiv">
            <div  className="BasicLeftMainDivChild1stDiv">MY CAMPAIGN TITLE</div>
            <div className="BasicLeftMainDivChild2ndDiv">PREVIEW CAMPAIGN</div>
            <div className="BasicLeftMainDivChild3rdDiv">PRE-LAUNCH PAGE</div>
            <div onClick={() => {
                
                if (editorExtendco === false) {
                    setEditorExtend("block")
                    setEditorExtendco(true)
                } else {
                    setEditorExtend("none")
                    setEditorExtendco(false)
                }
            }} className="BasicLeftMainDivChild4rthDiv">CAMPAIGN EDITOR</div>
            <span style={EditorExtend} className="BasicLeftMainDivChild4rthDivExtend">
                    <div onClick={() => {
                        setForm(true)
                        setFormhead("Basic")
                }}>1.Basics</div>
                <div onClick={() => {
                        setForm(false)
                        setFormhead("Funding")
                }}>2.Funding</div>
                <div>3.Perk</div>
            </span>
            <div  onClick={() => {
                
                if (resourceExtendco === false) {
                    setresourceExtend("block")
                    setresourceExtendco(true)
                } else {
                    setresourceExtend("none")
                    setresourceExtendco(false)
                }
            }}  className="BasicLeftMainDivChild5thDiv">RESOURCES</div>
            <span style={ResourceExtend} className="BasicLeftMainDivChild5thDivExtend">
                 <div>EXPERTS DIRECTORY</div>
                <div>EXPERTS DIRECTORY</div>
            </span>
        </div>

            
            <div className="BasicRightMainDiv">
                
                <div className="BasicRightMainDiv1stDiv">
                    <p style={{ marginLeft: 40 }}>Campaign / { formhead}</p>
                    <div className="BasicRightMainDiv1stDivinnerDiv1">SAVE CAMPAIGN</div>
                    <div className="BasicRightMainDiv1stDivinnerDiv2">REVIEW & LAUNCH</div>
                </div>
                </div>
                {form ? <BasicForm handlesavenext={handlesavenext} titlebc={ titleborderColor}/> : <FundingForm handlesavenext2={ handlesavenext2}/>}
            
            
        </div>

        <div style={modall} className="model">
            <div className="modelContaint">
                <h1 style={{color:"red"}}>Thank you!</h1>
                <h2>You successfully launch your campaign </h2>
                <p>Your Campaign title is <span>{payload.Title}</span></p>
                <p>Your Campaign duration is  <span>{payload.Duration}</span></p>
                
               <Link to="/">
                    <button className="backToHomeBtn"  onClick={()=>{setModal("none")}}>BACK TO HOME</button>
                   </Link>
            </div>
        </div>
    
    <Footer />
    </>
}