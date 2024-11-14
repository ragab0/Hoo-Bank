"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosContainer() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      //  easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return;
}
