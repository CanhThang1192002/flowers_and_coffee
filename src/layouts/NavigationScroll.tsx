import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface NavigationScrollProps {
  children: ReactNode;
}

const NavigationScroll = ({ children }: NavigationScrollProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

export default NavigationScroll;
