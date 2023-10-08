import { useState } from "react";

function Carousel() {
  const [pic, setpic] = useState([
    "https://www.combonation.in/storage/57455/651d0fbdab327_banner-for-combonation-2-(1).jpg",

    "https://www.combonation.in/storage/55877/650bdb66d04a6_combonation-banner-m-01(1)_11zon-(1).jpg",

    "https://www.combonation.in/storage/57636/651e87ade3646_Artboard-10.jpg",

    "https://www.combonation.in/storage/57638/651e880064ed0_Artboard-12.jpg",

    "https://www.combonation.in/storage/57634/651e872f450b1_Artboard-9.jpg",
  ]);

  return (
    <div className="carousel w-full">
      <div className="carousel-item w-full">
        <img
          src={pic[0]}
          alt="Tailwind CSS Carousel component"
          className="w-full"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={pic[1]}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={pic[2]}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={pic[3]}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={pic[4]}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src={pic[5]}
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
    </div>
  );
}
export default Carousel;
