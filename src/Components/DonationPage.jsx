import { Link } from "react-router-dom";

export default function DonationPage(data){
   
    let props={
        
        "Image":['./pp1.png','./pp2.png','./pp3.png','./pp4.png','./pp5.png'],
        "Title":["SHI: OMNIBUS EDITION VOL. 1 INDIEGOGO EXCLUSIVE!","Crisis Proof Leadership by Beth Rashleigh","Flash Pro: World's Fastest Powerbank Redesigned","The Ausker multi-functional kitchen utensils"],

        "Description":["Billy's Tucci's classic is collected in this Premiere 488-pg. Full-Color, Hardcover Omnibus Edition!","My book is about what the best leaders do during times of crisis.","25000mAh/92.5Wh | OLED Screen | 3 USB-C Ports | Magsafe + Apple Watch | 6 Ports | 190W Total","All the kitchen tools you need, with the multi-functional design you didn’t know you were missing."],

        "Type":["COMICS","WRITING & PUBLISHING","PHONES & ACCESSORIES","HOME"],

        "Price":["$74,668 ", "$3,460 ","$3,460 ","$48,498 "],

        "PricePercent":["74%","36%","88%","64%"],

        "DaysLeft":["30 days left","28 days left","16 days left","13 days left"],
        "Link":["https://www.indiegogo.com/projects/shi-omnibus-edition-vol-1-indiegogo-exclusive/x/27211303#/","","",""],

        "Url":["https://www.youtube.com/embed/GvJraVSeMOE","https://www.youtube.com/embed/HB8aW6lpS3I","https://www.youtube.com/embed/Ie6-UJhthG4","https://www.youtube.com/embed/9t_w05cYWnU"]

    }
    console.log("url ",props);
    let index=0;


    return(

        <>
        <div className="donationPageMainDiv flex-center ml-10 mr-10 ">
        
        <div className="donationPageLeftSideDiv ">
            <div className="dpVideoDiv ">

            <iframe  src={props.Url[index]} title="YouTube video player" frameborder="0"  allowfullscreen></iframe>

            </div>
        
        </div>
        <div className="donationPageRightSideDiv ml-10 w-40">
            {/*  */}

     <div>
           <div className="pCardHeadingDiv">
           <h3>FUNDING</h3>
           
           <h1>{props.Title[index]}</h1>

         <p>{props.Description[index]}</p>

            <p>{props.Type[index]}</p>
         <p className="flex">
             <span>
                 <span className="price">{props.Price[index]}</span>
                 <span>USD raised</span>
                 </span>
                 <span>{props.PricePercent[index]}</span>
                 </p>
           <div className="percentageBarCover">  
           <div className="percentageBar"style={{width:props.PricePercent[index]}}></div>
           </div>
           <p>{props.DaysLeft[index]}</p> 
           </div>
           <div className="donationBtn">
           <Link to="/donationpayment">    <button >BACK IT</button> </Link>

           </div>


           </div>
   
       {/* //// */}

        </div>
        
       
        
        
        </div>
        </>
        )
}