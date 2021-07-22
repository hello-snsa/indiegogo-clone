
export default function IyCategory(props){


    return(
        <>
        <div className="IyCategoryMainDiv  tAlign-C">

        <div className="iyImageDiv ">
            <img src={props.image} alt="icon" />
            
        </div>
<p>{props.text}</p>
        {/* <div className="iyText">
            
        </div> */}





        </div>

        </>
    )
}