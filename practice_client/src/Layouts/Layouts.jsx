import Carousel from "../Components/Carousel";
import CardCarousel from "../Components/CardCarousel";
import Header from "../Components/header";
import { useContext } from "react";
import { Bios } from "../App";

function Layouts(){
  const head=useContext(Bios);
  return (
    <div className="min-h-[100vh]  font-sans">
      <Header />
      <section>
        <div>
          <img src={head.img2} />
        </div>
      </section>
      <nav>
        <Carousel />
      </nav>
      <div>
        <img src={head.img3} alt="new" />
      </div>
      <div className="z-0">
        <div className="py-[1rem]"><h1>Brands You can't Miss</h1></div>
        <div>
          <div>
            <img src={head.img4} /><img src={head.img4} />
          </div>
          <div></div>
        </div>
      </div>
      <section className="z-0">
        <CardCarousel />
      </section>
    </div>
  );
}

export default Layouts;
