import { useEffect, useState } from "react";

export const useMediaQuery = (screen) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= screen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= screen);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
