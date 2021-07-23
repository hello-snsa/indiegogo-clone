import PopularCards from "./PopularCards";

export default function HomepagePopularProject()
{
    let arr=[0,1,2,3];

    let obj={
        
        "Image":['./pp1.png','./pp2.png','./pp3.png','./pp4.png','./pp5.png'],
        "Title":["SHI: OMNIBUS EDITION VOL. 1 INDIEGOGO EXCLUSIVE!","Crisis Proof Leadership by Beth Rashleigh","Flash Pro: World's Fastest Powerbank Redesigned","The Ausker multi-functional kitchen utensils"],

        "Description":["Billy's Tucci's classic is collected in this Premiere 488-pg. Full-Color, Hardcover Omnibus Edition!","My book is about what the best leaders do during times of crisis.","25000mAh/92.5Wh | OLED Screen | 3 USB-C Ports | Magsafe + Apple Watch | 6 Ports | 190W Total","All the kitchen tools you need, with the multi-functional design you didn’t know you were missing."],

        "Type":["COMICS","WRITING & PUBLISHING","PHONES & ACCESSORIES","HOME"],

        "Price":["$74,668 ", "$3,460 ","$3,460 ","$48,498 "],

        "PricePercent":["74%","36%","88%","64%"],

        "DaysLeft":["30 days left","28 days left","16 days left","13 days left"],
        "Link":["https://www.indiegogo.com/projects/shi-omnibus-edition-vol-1-indiegogo-exclusive/x/27211303#/","","",""]
    }
    
    return(
        <>
        <div className="homepagePopularProjectMainDiv">

        <div className="hppUpperDiv flex">
            <div className="hppUpperLeft">
                <h1>Popular Projects</h1>
            </div>
            <div className="hppUpperRight">
                <button className="roundBtn ">{"<"}</button>
                <button className="roundBtn ">{">"}</button>
            </div>
        </div>

                <hr></hr>
        <div className="hppLowerDiv">
            <div className="popularCardsDiv flex">
            {
              arr.map((i) => {
                    return   <PopularCards props={obj} index={i} />
              })}



            </div>
        </div>


        </div>
        </>
    )
}