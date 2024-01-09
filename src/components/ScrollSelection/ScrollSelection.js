import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollSelection.css";
import About from "../about/About";
import Moon from "../../assets/moon2.png";
import YouTube from "../YouTube/YouTube";
import Resume from "../Resume/Resume";
import ProjectCreator from "../Project/ProjectCreator";

function ScrollSelection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const moonRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            const arcHeight = -300;
            const horizontalPosition = window.innerWidth * self.progress;
            const verticalPosition =
              Math.sin(self.progress * Math.PI) * arcHeight;
            const rotationValue = Math.sin(self.progress * Math.PI) * 360;
            const opacityValue =
              self.progress <= 0.1
                ? 0
                : self.progress <= 0.2
                ? (self.progress - 0.1) * 10
                : 1;

            // Animate only the moon
            gsap.to(moonRef.current, {
              x: horizontalPosition,
              y: verticalPosition,
              opacity: opacityValue,
              rotation: rotationValue,
              ease: "none",
            });
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <img ref={moonRef} src={Moon} alt="Moon" className="moon-image" />

      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            {Array(100)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="star"
                  style={{
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 90}%`,
                  }}
                ></div>
              ))}
            <About></About>
          </div>
          <div className="scroll-section">
            <Resume />
          </div>
          <div className="scroll-section">
            <ProjectCreator />
          </div>
          <div className="scroll-section">
            <YouTube />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSelection;
