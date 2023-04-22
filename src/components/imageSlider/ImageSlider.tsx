import { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slider1 =
    "https://i0.wp.com/vfxdownload.com/wp-content/uploads/2021/01/Preview-2021-01-23T205014.520.jpg?fit=590%2C332&ssl=1";
  const slider2 =
    "https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/F4F8FE9F76DE41D1BCF549E446A6E80A/rappler-coupons-ls-4_F4F8FE9F76DE41D1BCF549E446A6E80A.jpg";
  const slider3 =
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618548899692/groceries-offers.jpg";

  // Set the time interval for slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-indicators">
        <span
          className={`slider-indicator ${currentSlide === 0 ? "active" : ""}`}
          onClick={() => setCurrentSlide(0)}
        ></span>
        <span
          className={`slider-indicator ${currentSlide === 1 ? "active" : ""}`}
          onClick={() => setCurrentSlide(1)}
        ></span>
        <span
          className={`slider-indicator ${currentSlide === 2 ? "active" : ""}`}
          onClick={() => setCurrentSlide(2)}
        ></span>
      </div>
      <img
        className={`slider-image ${currentSlide === 0 ? "active" : ""}`}
        src={slider1}
        alt="Slider 1"
      />
      <img
        className={`slider-image ${currentSlide === 1 ? "active" : ""}`}
        src={slider2}
        alt="Slider 2"
      />
      <img
        className={`slider-image ${currentSlide === 2 ? "active" : ""}`}
        src={slider3}
        alt="Slider 3"
      />
    </div>
  );
};

export default ImageSlider;
