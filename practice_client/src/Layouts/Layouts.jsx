import Carousel from "../Components/Carousel";
import Header from "../Components/header";
// import CardCarousel from "../Components/CardCarousel";

function Layouts(){
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
          <img src={''} />
        </div>
      </section>
      <nav>
        <Carousel />
      </nav>
      <div>
        <img src={''} alt="new" />
      </div>
      <div className="z-0">
        <div className="py-[1rem]">
          <h1>Brands You can't Miss</h1>
        </div>
        <div>
          <div>
            <img src={''} />
            <img src={''} />
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
