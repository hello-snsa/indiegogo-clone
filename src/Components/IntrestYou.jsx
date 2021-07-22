import IyCategory from "./IyCategory";

export default function IntrestYou(){


    return(
        <>

<div className="intrestYouMainDiv tAlign-C">

        <div className="iyHeaderDiv tAlign-C">
            <h1>Which categories interest you?</h1>
            <p>Discover projects just for you and get great recommendations when you select your interests.
            </p>
        </div>

        <div className="iyButtonDiv">
            <button id="iySignupBtn" >
            SIGN UP AND SELECT INTERESTS
            </button>
        </div>
        <p>Or explore our top categories</p>

        <div className="iycategoryDiv flex w-75 mleft-12 iSize-80 center ">
            <IyCategory image="homeIcon.png" text="HOME" />

            <IyCategory image="phoneIcon.png" text="PHONES & ACCESSORIES" />
            <IyCategory image="bagIcon.png" text="TRAVEL & OUTDOORS" />
            <IyCategory image="healthIcon.png" text="HEALTH & FITNESS" />
            <IyCategory image="musicIcon.png" text="AUDIO" />
            <IyCategory image="camIcon.png" text="FILM" />
          
        </div>









</div>

        </>
    )
}