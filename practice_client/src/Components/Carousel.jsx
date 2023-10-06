
function Carousel(){
  const CarouselPics= [{
    Carousel_IMG_1:
      "https://www.combonation.in/storage/55409/6503f33f973ed_hero-bannerArtboard-11.jpg",
  },
  {
    Carousel_IMG_2:
      "https://www.combonation.in/storage/55411/6503f3cf2ef5c_hero-bannerArtboard-12.jpg",
  },
  {
    Carousel_IMG_3:
      "https://www.combonation.in/storage/55413/6503f405c92ab_hero-bannerArtboard-9.jpg",
  },
  {
    Carousel_IMG_4:
      "https://www.combonation.in/storage/51150/64c9f33b7217b_hero-banner-Recovered-RecoveredArtboard-10-copy-4.jpg",
  },
  {
    Carousel_IMG_5:
      "https://www.combonation.in/storage/55877/650bdb66d04a6_combonation-banner-m-01(1)_11zon-(1).jpg",
  },
  {
    Carousel_IMG_6:
      "https://www.combonation.in/storage/55407/6503f30af238d_hero-bannerArtboard-10.jpg",
  }
];

  // console.log(CarouselPics[0].Carousel_IMG_1)
    return (
      <div className="carousel w-full">
        <div className="carousel-item w-full">
        {CarouselPics.map((e, i) => {
            <img
              src={e} key={i}
              alt="Tailwind CSS Carousel component"
              className="w-full"
            />
          })}
          </div>
      </div>
    );
  }
  export default Carousel;
  {/* <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_1} 
      alt="Tailwind CSS Carousel component"
      className="w-full"
    />
  </div>
  <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_2}
      className="w-full"
      alt="Tailwind CSS Carousel component"
    />
  </div>
  <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_3}
      className="w-full"
      alt="Tailwind CSS Carousel component"
    />
  </div>
  <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_4}
      className="w-full"
      alt="Tailwind CSS Carousel component"
    />
  </div>
  <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_5}
      className="w-full"
      alt="Tailwind CSS Carousel component"
    />
  </div>
  <div className="carousel-item w-full">
    <img
      src={CarouselPics.Carousel_IMG_6}
      className="w-full"
      alt="Tailwind CSS Carousel component"
    />
  </div> */}