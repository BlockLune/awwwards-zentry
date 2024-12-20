import { useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";

function AnimatedTitle({
  title,
  containerClass,
}: {
  title: string;
  containerClass: string;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => {
        return (
          <div
            key={index}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word, i) => {
              return (
                <span
                  key={i}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default AnimatedTitle;
