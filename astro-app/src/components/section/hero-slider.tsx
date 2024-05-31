import { useState } from "react";
import type { HeroType } from "../../types/home";
import { cn } from "../../utils/cn";
import { Button } from "../../components/button";

export default function HeroSlider(props: {
  hero: HeroType[];
  baseUrl: string;
}) {
  const [currIdx, setCurrIdx] = useState(0);
  const hero = props.hero;
  return (
    <div
      id="default-carousel"
      className="relative w-full"
    >
      <div className="relative h-56 overflow-hidden md:h-96">
        {hero.map((e, idx) => {
          return (
            <div
              className={cn(
                "duration-700 ease-in-out",
                currIdx == idx
                  ? "visible opacity-100"
                  : "invisible opacity-0 translate-x-4"
              )}
            >
              <img
                src={props.baseUrl + e.image.data.attributes.url}
                className="absolute w-full bg-cover"
                alt="..."
              />
            </div>
          );
        })}
        <div className="absolute bg-black opacity-50 w-full h-full"></div>

        {hero.map((e, idx) => {
          return (
            <div
              className={cn(
                "absolute flex flex-col gap-3 items-center justify-center\
                text-white \
                h-full w-full duration-700 ease-in-out",
                currIdx == idx
                  ? "visible opacity-100"
                  : "invisible opacity-0 translate-x-4"
              )}
            >
              <h1 className="font-bold text-3xl">{e.title}</h1>
              <p>{e.description}</p>
              <Button params={e.button} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => setCurrIdx(currIdx == 0 ? hero.length - 1 : currIdx - 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => setCurrIdx(currIdx >= hero.length - 1 ? 0 : currIdx + 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
