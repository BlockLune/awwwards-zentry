import React, { useRef } from "react";
import gsap from 'gsap';
import AnimatedTitle from "./AnimatedTitle";

export default function Story() {
  const frameRef = useRef<HTMLImageElement>(null);

  function handleMouseLeave() {
    const element = frameRef.current;

    if (!element) return;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut',
    });
  }

  function handleMouseMove(event: React.MouseEvent<HTMLImageElement>) {
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  }

  return (
    <section id="story" className="min-h-dvh" w-screen bg-black text-blue-50>
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiveral ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <img
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                onMouseMove={handleMouseMove}
                ref={frameRef}
                src="/img/entrance.webp"
                alt="etrance"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
