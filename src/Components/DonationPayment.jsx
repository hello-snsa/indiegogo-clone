import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ThankYou from "./ThankYou";


export default function DonationPayment(){
    let leftArrowHead="<";
    // let isChecked=false;
    
   

    let [amount,setAmount]=React.useState(0);
    let [fee,setFee]=React.useState(0);
    let [total,setTotal]=React.useState(0);

    let [reUrl,setReUrl]=React.useState();
    let [isChecked,setIsChecked]=React.useState(false);

    const handleIt=(value)=>{
        console.log("value ",value)
        setAmount(Number(value));
        let per=Number(value)*0.05;
        // setTotal(Number(value)+10);
        setFee(per);
        setTotal(Number(value)+per);

    }
 

    const checkIt=()=>{
        
        setIsChecked(true);
        setReUrl("/thankyou")
        
    }
    const payment=()=>{
        
        if(!isChecked)
        { 
           
            alert("accept the Term & Condition to proceed further.")
      
        }
    }

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
        <div className="mr-5 "><input type="text"id="inputName" placeholder="Full Name"></input></div>
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
            <div className="amountInputBox flex">
            {/* <p>$</p> */}
        <span id="amountSymbol">$</span>  <input type="text" onChange={(e)=>handleIt(e.target.value)}></input>  
        <span id="USD">USD</span>
            </div>
        </div>
        <hr></hr>

        <div className="amountSummary flex">
            <div className="subTotal">Subtotal</div>
            <div className="amount">${amount} USD</div>
            </div>
        <div className="amountSummary flex">
            <div className="subTotal">Indiegogo Fee</div>
            <div className="amount">${fee} USD</div>
            </div>
        <div className="amountSummary flex">
            <div className="total">TOTAL</div>
            <div className="totalAmount">${total} USD</div>

        </div>

        {/*  */}
        
<div className="flex margin-top-5 alignLeft">
    <div>
                    <input type="checkBox" className="footerCheckBox"  onClick={()=>checkIt()} />
                    {/* <input type="checkBox" className="footerCheckBox"  onClick={()=>checkIt()} /> */}
                    </div>
                    <div>I agree to the <b> <span className="pink space"> Terms of Use </span> </b>and have read and understand the <b><span className="pink space"> Privacy Policy.</span></b>
                    </div>
</div>
<div>

<Link to={reUrl}> 
<button id="footerFormSubmits" onClick={()=>payment()}> SUBMIT PAYMENT </button>
</Link>
                    </div>
               {/*  */}
               {/* */}



            
        </div>{/* donationPaymentRightDiv */}





        </div>
        </>
    )
}