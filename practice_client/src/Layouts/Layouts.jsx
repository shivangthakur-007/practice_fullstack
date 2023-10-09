import Carousel from "../Components/Carousel";
import { useContext } from "react";
import Header from "../Components/header";

function Layouts() {
  const img = {
    img1: "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png",
    img2: "https://www.combonation.in/storage/55399/6501ac9b11108_BYOC_Strip_banner_Sep_DT.jpg",
    img3: "https://www.combonation.in/storage/56834/6512dbb29b553_MKQ_banner_DT_oct.jpg",
    img4: "https://www.combonation.in/storage/55406/6503f10e5e302_buy--Recovered-RecoveredArtboard-1-copy-6.jpg",
  };
  return (
    <div className="min-h-[100vh]  font-sans">
      <Header />
      <div className="carousel bg-[#FFF4E3] font-semibold text-xl gap-3 py-3 px-2 text-gray-500">
        <div className="carousel-item">Beauty</div>
        <div className="carousel-item">Accessories</div>
        <div className="carousel-item">Body Care</div>
        <div className="carousel-item">fragnances</div>
        <div className="carousel-item">Hair Care</div>
        <div className="carousel-item">Men Grooming</div>
        <div className="carousel-item">Mew Launch</div>
        <div className="carousel-item">Mew Launch</div>
        <div className="carousel-item">Wedding</div>
        <div className="carousel-item">Baby Care</div>
        <div className="carousel-item">Health & wellness</div>
        <div className="carousel-item">Health & kitchen</div>
        <div className="carousel-item">Home & kitchen</div>
      </div>
      <section>
        <div>
          <img src={img.img2} />
        </div>
      </section>
      <nav>
        <Carousel />
      </nav>
      <div>
        <img src={img.img3} alt="new" />
      </div>
      <div className="z-0">
        <div className="py-[1rem]">
          <h1>Brands You can't Miss</h1>
        </div>
        <div>
          <div>
            <img src={img.img4} />
            <img src={img.img4} />
          </div>
          <div></div>
        </div>
      </div>
      <section className="z-0">
        {/* <CardCarousel /> */}
      </section>
    </div>
  );
}

export default Layouts;
