import { useState } from "react"
import "./Campaign.css"
export default function BasicForm({ handlesavenext,titlebc }) {
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    const [image, setImage] = useState("")
  
    return  <div className="BasicRightMainDiv2ndDiv">
                    <h1 style={{fontWeight:400}}>Basics</h1>
                    <p>Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.</p>
                    <h4>Campaign Title <span>*</span></h4>
                    <h5>What is the title of your campaign?</h5>
        <input style={{ width: 95 + "%", height: 40,borderColor:`${titlebc}` }} type="text" value={title} onChange={ (e)=>{setTitle(e.target.value)}}/>
                    <h4>Campaign Tagline <span>*</span></h4>
                    <h5>Provide a short description that best describes your campaign to your audience.</h5>
                    <input style={{width:95+"%",height:40}} type="text" />

                    <h4>Campaign Card Image <span>*</span></h4>
                    <h5 >Upload a square image that represents your campaign.</h5>
                    <h5>640 x 640 recommended resolution, 220 x 220 minimum resolution.</h5>
        <input style={{ width: 55 + "%", height: 40 }} type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" onChange={ (e)=>{setImage(e.target.value)}}/>
                    
                    <h4>Location<span>*</span></h4>
                    <h5>Choose the location where you are running the campaign. This location will be visible on your campaign page for your audience to see.</h5>
                    <input style={{width:95+"%",height:40}} placeholder="Location" type="text" />
                    
                    <h4>Catagory</h4>
                    <h5>To help backers find your campaign, select a category that best represents your project.</h5>
                    <select style={{width:55+"%",height:40}} name="Select a category" >
                    <optgroup label="Tech and Innovation">
                        
                            <option>Select a Catagory</option>
                            <option>Audio</option>
                            <option>Camera Gear</option>
                            <option>Education</option>
                            <option>Energy & Green Tech</option>
                            <option>Fashion & Wearable</option>
                    </optgroup>
                    <optgroup label="CREATIVE WORKS">
                        <option >Arts</option>
                            <option >Comics</option>
                            <option>Dance & Theater</option>
                            <option>Film</option>
                            <option>Music</option>
                    </optgroup>
                    </select>
                    
                    <h4 style={{marginTop:40}}>Campaign Duration<span>*</span></h4>
                    <h5>How many days will you be running your campaign for? You can run a campaign for any number of days, with a 60 day duration maximum.</h5>
        <input style={{ width: 6 + "%", height: 40 }} type="text" value={duration} onChange={ (e)=>{setDuration(e.target.value)}}/>

        <button onClick={() => {
            const payload = {
                Title: title,
                Duration: duration,
                Img: image,
            }
            handlesavenext(payload)
        }} style={{ backgroundColor: "#7a69b3", color: "white", float: "right", marginTop: 100, width: 150, height: 40, marginBottom: 50 }}>Save & Next</button>
                </div>
}