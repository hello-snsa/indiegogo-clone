
export default function CarouselImageBox(){

 
   let carouselImage=()=>{
     
      return `./carousel3.jpg`
   }
 

    function slide() {
        const arr = [
          "./carousel1.jpg",
          "./carousel2.jpg",
          "./carousel3.jpg",
          "./carousel4.jpg",
          "./carousel5.jpg",
         
        ];
        let image = document.getElementById("carouselImageId");
        let i = 1;
        setInterval(function () {
          image.setAttribute("src", arr[i]);
          i++;
          if (i == 4) {
            i = 0;
          }
        }, 1200);
      }
      // slide();
    

    return (
        
        <>
        <div className="carouselImageBoxMainDiv">
        
        <div className="imageBox">
            <img id="carouselImageId"   src={carouselImage()}  alt="image" />
            {/* {slide()} */}
{/* src={carouselImage} */}
        </div>
        
        
        
        
        
        
        
       
        
        
        
        
        
        
        
        </div> {/* carouselImageBoxMainDiv */}
        
        </>
        )
}