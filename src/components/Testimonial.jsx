import { useState, useEffect, useRef } from "react";
import { getAPI } from "../http";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const Testimonial = () => {
  const containerRef = useRef(null);

  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = useMediaQuery(568);
  const slidesToShow = isMobile ? 1 : 3;

  useEffect(() => {
    (async function () {
      try {
        const dataAPI = await getAPI("testimonial");
        if (dataAPI) {
          setTestimonialsData(dataAPI);
        } else {
          setTestimonialsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials data:", error);
        setTestimonialsData([]);
      }
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
    <section
      id="testimonials"
      role="region"
      aria-label="Depoimentos de nossos clientes"
    >
      <div className="control">
        <h2 id="testimonials-heading">Depoimentos</h2>
        <div>
          <button
            className="base-button"
            id="back"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Slide anterior"
            aria-disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            className="base-button"
            id="next"
            onClick={handleNext}
            disabled={currentIndex === testimonialsData.length - slidesToShow}
            aria-label="Próximo slide"
            aria-disabled={
              currentIndex === testimonialsData.length - slidesToShow
            }
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        className="testimonial-container"
        ref={containerRef}
        role="region"
        aria-labelledby="testimonials-heading"
      >
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
