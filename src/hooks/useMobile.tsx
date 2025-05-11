import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const mq = window.matchMedia("only screen and (max-width: 768px)");

  useEffect(() => {
    const onChange = () => {
      setIsMobile(mq.matches);
    };

    mq.addEventListener("change", onChange);

    setIsMobile(mq.matches);
    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile
};
