import Carousel from "../Components/Carousel";
import CardCarousel from "../Components/CardCarousel";
import Header from "../Components/header";

function Layouts() {
  const img =
    "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png";
  const img1 =
    "https://www.combonation.in/storage/55399/6501ac9b11108_BYOC_Strip_banner_Sep_DT.jpg";
  const img2 =
    "https://www.combonation.in/storage/56834/6512dbb29b553_MKQ_banner_DT_oct.jpg";
  return (
    <div className="min-h-[100vh]  font-sans">
      <Header />
      <section>
        <div>
          <img src={img1} />
        </div>
      </section>
      <nav>
        <Carousel />
      </nav>
      <div>
        <img src={img2} alt="new" />
      </div>
      <section className="z-0">
        <CardCarousel />
      </section>
    </div>
  );
}

export default Layouts;
