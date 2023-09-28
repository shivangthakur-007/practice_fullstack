import Carousel from "../Components/Carousel";


function Carousel_img() {
const Carousel_Pics = [
  {
    Carousel_IMG_1: "https://www.combonation.in/storage/55409/6503f33f973ed_hero-bannerArtboard-11.jpg",
  
    Carousel_IMG_2: "https://www.combonation.in/storage/55411/6503f3cf2ef5c_hero-bannerArtboard-12.jpg"
  
    Carousel_IMG_3: "https://www.combonation.in/storage/55413/6503f405c92ab_hero-bannerArtboard-9.jpg",
  
    Carousel_IMG_4: "https://www.combonation.in/storage/51150/64c9f33b7217b_hero-banner-Recovered-RecoveredArtboard-10-copy-4.jpg",
  
    Carousel_IMG_5: "https://www.combonation.in/storage/55877/650bdb66d04a6_combonation-banner-m-01(1)_11zon-(1).jpg",
  
    Carousel_IMG_6: "https://www.combonation.in/storage/55407/6503f30af238d_hero-bannerArtboard-10.jpg",
  },
];
    return (
      <>
        <Carousel imgName={Carousel_Pics} />
      </>
    );
}
export default Carousel_img;
