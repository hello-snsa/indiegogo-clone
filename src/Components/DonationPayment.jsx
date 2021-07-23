
export default function DonationPayment(){
    let leftArrowHead="<";

    return(
        <>
        <div className="donationPaymentMainDiv flex">

        <div className="donationPaymentLeftDiv">

            <div className="dpageLeftHeader">
                <h3>YOU'RE CONTRIBUTING TO</h3>
                <h1>SHI: OMNIBUS EDITION VOL. 1 INDIEGOGO EXCLUSIVE!</h1>
                
            </div>
        

        <button id="backBtn">{leftArrowHead} Back</button>

        <div className="donationForm">

        <div id="securePayment">Secure Payment <img src="./lockIcon.png" alt="lock"/> </div>

        <div className="donationFormbox ">
    <div>
        <div className="mb-2">Name on Card <span className="pink w-600 large">*</span></div>
        <div className="mr-5"><input type="text"id="inputName"></input></div>
    </div>

        <div>
        <div className="mb-2 mt-2">Card Information<span className="pink w-600 large">*</span></div>
          <div className="box flex  inputBox">  
            <div >
              <input type="text" placeholder="Card number" className="no-border"></input>
              </div>
              <div className="smallBox">
               <input type="text" placeholder="MM"></input>/
             <span></span>  <input type="text" placeholder="YY"></input>    
               <input type="text" placeholder="CVC"></input>    
              </div>
           
            </div>
        </div>
        <div className=" mt-5 ">
            <input type="checkbox" className="checkBox"/>
            <span id="rememberCard">Remember this card</span>
        </div>
        </div>


        </div>
        </div>

        <div className="donationPaymentRightDiv">

        <div className="dpRHeadingDiv">
            <h2>Contribution summary</h2>

        </div>
        <div className="rightForm">
            <p>Your contribution</p>
            <input type="text"></input>
        </div>



            
        </div>{/* donationPaymentRightDiv */}





        </div>
        </>
    )
}