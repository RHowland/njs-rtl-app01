//HeroSection
"use client";
import Image from "next/image";
import React, { useState } from "react";

const HeroSection = () => {
  // State to track button styles
  const [isPrimary, setIsPrimary] = useState(true);

  // Function to toggle button styles
  const toggleButtonStyles = () => {
    setIsPrimary(!isPrimary);
  };

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="font-bold text-center mt-36 text-5xl xl:text-6xl md:text-left">
            Discover the Power of Our Services
          </h1>
          <p className="text-center md:text-left">
            Transform your business with our innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className={`inline-flex text-${
                isPrimary ? "white" : "gray-700"
              } bg-${
                isPrimary ? "[#0000E7]" : "gray-100"
              } border-0 py-2 px-6 focus:outline-none rounded text-lg`}
              onClick={toggleButtonStyles}
            >
              Learn more
            </button>
            <button
              className={`ml-4 inline-flex text-${
                isPrimary ? "gray-700" : "white"
              } bg-${
                isPrimary ? "gray-100" : "[#0000E7]"
              } border-0 py-2 px-6 focus:outline-disable hover:bg-${
                isPrimary ? "gray-200" : "[#0000E7]"
              } rounded text-lg`}
              onClick={toggleButtonStyles}
            >
              Signup
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            className="object-cover object-center rounded"
            src="/Happy Couple.jpg"
            width={720}
            height={600}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/**
* =====================================================================
*   ORIGINAL DOCUMENTATION 
* =====================================================================
* File Name      : HeroSection.tsx
* Component Name : HeroSection
* Component Type : Functional Component
* Date Created   : 9-6-2024
* Dev Name       : Hijab Zulfiqar
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To provide an engaging and interactive introduction to our services on the main page.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : It displays a hero section with dynamic buttons for learning more or signing up, and a compelling visual.
* 
* ------------------------------
* Section Comments: none
* 
* ------------------------------
* Input Comments: none
* 
* ------------------------------
* Output Comments: none
* 
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : No, standard React and Tailwind CSS practices were utilized.
*
*/
