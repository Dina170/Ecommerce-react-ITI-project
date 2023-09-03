export default function Slider() {
  return (
    <>
      <div
        className="carousel slide"
        id="mycarousel"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <ul className="carousel-indicators">
          <li
            data-bs-slide-to="0"
            data-bs-target="#mycarousel"
            className="active"
          ></li>
          <li data-bs-slide-to="1" data-bs-target="#mycarousel"></li>
          <li data-bs-slide-to="2" data-bs-target="#mycarousel"></li>
        </ul>
        <div className="carousel-inner text-center m-auto">
          <div className="carousel-item active">
            <img src="./images/1.jpg" alt="" className="w-100" />
            <p className="carousel-caption">Image one</p>
          </div>

          <div className="carousel-item">
            <img src="./images/2.jpg" alt="" className="w-100" />
            <p className="carousel-caption">Image two</p>
          </div>

          <div className="carousel-item">
            <img src="./images/3.jpg" alt="" className="w-100" />
            <p className="carousel-caption">Image three</p>
          </div>
        </div>
        <a
          href="/#"
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#mycarousel"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          href="/#"
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#mycarousel"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
}
