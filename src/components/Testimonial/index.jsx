import { useState, useEffect, useRef } from "react";
import { getAPI } from "../../http";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Testimonial = () => {
  const containerRef = useRef(null);

  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const isMobile = useMediaQuery(568);
  const slidesToShow = isMobile ? 1 : 3;

  useEffect(() => {
    (async function () {
      const dataAPI = await getAPI("testimonial");
      setTestimonialsData(dataAPI);
    })();
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="testimonials">
      <div className="control">
        <h2>Depoimentos</h2>
        <div>
          <button
            className="base-button"
            id="back"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            className="base-button"
            id="next"
            onClick={handleNext}
            disabled={currentIndex === testimonialsData.length - slidesToShow}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="testimonial-container" ref={containerRef}>
        {testimonialsData
          .slice(currentIndex, currentIndex + slidesToShow)
          .map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.rating}</span>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
      </div>
    </section>
  );
};
