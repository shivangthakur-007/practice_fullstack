

function Carousel({imgName}){
  console.log({imgName})
    return (
      <div className="w-64 carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_1} 
            alt="Tailwind CSS Carousel component"
            className="w-full"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_2}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_3}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_4}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_5}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={imgName[0].Carousel_IMG_6}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    );
}
export default Carousel;