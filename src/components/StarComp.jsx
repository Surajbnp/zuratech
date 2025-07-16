import React, { useEffect, useRef } from "react";
import Styles from "../styles/star.module.css";

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Adjust the canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Number of stars
    const numStars = 500;
    const stars = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create stars with random positions and velocities
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * canvas.width,
      });
    }

    function draw() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each star
      ctx.fillStyle = "white";
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const x = centerX + (star.x / star.z) * canvas.width;
        const y = centerY + (star.y / star.z) * canvas.height;

        // Ensure the star size is always positive and non-zero
        const size = Math.max(1, 1.5 * (1 - star.z / canvas.width));
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, false);
        ctx.fill();

        // Update the star's position
        star.z -= 2;

        // Reset star position if it goes out of view
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }
      }

      // Request the next animation frame
      requestAnimationFrame(draw);
    }

    // Start the animation
    draw();

    // Adjust the canvas size when the window is resized
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className={Styles.canvas} ref={canvasRef}></canvas>;
};

export default StarfieldCanvas;
