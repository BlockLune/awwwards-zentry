import clsx from "clsx";

function AnimatedTitle({
  title,
  containerClass,
}: {
  title: React.ReactNode;
  containerClass: string;
}) {
  return (
    <div
      className={clsx(
        "mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]",
        containerClass,
      )}
    >
      {title}
    </div>
  );
}

export default AnimatedTitle;
