import Card from "./Card";


function CardCarousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Card />
        <Card />
        <Card />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-white hover:text-white text-black">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-white hover:text-white text-black">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Card />
        <Card />
        <Card />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-white hover:text-white text-black">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-white hover:text-white text-black">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Card />
        <Card />
        <Card />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-white hover:text-white text-black">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-white hover:text-white text-black">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Card />
        <Card />
        <Card />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-white hover:text-white text-black">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-white hover:text-white text-black">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
export default CardCarousel;
