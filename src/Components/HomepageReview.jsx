


export default function HomepageReview(){

    let rightArrow=">";
    return(
        <>  
        <div className="homepageReviewMainDiv">

        <div className="hpReviewHeaderDiv">
            <h1>From the Indiegogo Review</h1>
            <p>Your behind-the-scenes view of the people and stories behind Indiegogo projects</p>
        </div>
        
        <div className="hpReviewCardDiv flex">
            <div className="hprCard1">
                <div className="hprc1ImageDiv">
                    <img src="./review1.png" alt="review image" />
                </div>
                <div className="hpriHeaderDiv">
                    <h3>5 Gadgets To Make You Feel At Home, In Your Home</h3>
                    <p>Check out these Indiegogo products that will make your space more fun and more livable</p>
                    <p className="readMore bold">READ MORE {rightArrow} </p>
                </div>

            </div>
{/*  */}
<div className="hprCard1">
                <div className="hprc1ImageDiv">
                    <img src="./review2.png" alt="review image" />
                </div>
                <div className="hpriHeaderDiv">
                    <h3>Most Popular Campaign in Every State</h3>
                    <p>Ever wonder which crowdfunding campaigns raised the most funds in the US?</p>
                    <p className="readMore bold">READ MORE {rightArrow} </p>
                </div>

            </div>
{/*  */}
<div className="hprCard1" id="review3">
                <div className="hprc1ImageDiv">
                    <img src="./review3.png" alt="review image"  />
                </div>
                <div className="hpriHeaderDiv">
                    <h3>8 Green Tech Ideas to Make the Planet Cleane</h3>
                    <p>Here are some of the most innovative eco-conscious campaigns on Indiegogo right now.</p>
                    <p className="readMore bold">READ MORE {rightArrow} </p>
                </div>

            </div>
{/*  */}
        </div>



        </div>
        </>
    )
}