"use client";

import { useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Memoize the refresh handler to ensure proper cleanup
  const handleResize = useCallback(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 100,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return <>{children}</>;
}
