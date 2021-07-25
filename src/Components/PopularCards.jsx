import { Link } from "react-router-dom"

export default function PopularCards({props,index}){
    
 
   
   
    return (
    <>  
     
  
    
    <div className="popularCardMainDiv">
    <Link to="/donationpage" ind={index} >
        <div className="popularCardContainer" >
            <div className="pCardImageDiv">
               
                <img src={props.Image[index]} alt="popular image"/> 
            </div>
            <div className="pCardHeadingDiv">
            <h3>FUNDING</h3>
            <hr></hr>
            <h2>{props.Title[index]}</h2>
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
        </div>

        </Link>
    </div>
    </>
    )
}