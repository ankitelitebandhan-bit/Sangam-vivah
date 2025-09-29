import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    big: "25,000+",
    smallTop: "Serviced over",
    smallBottom: "Elite Customer",
    rotateDuration: 12,
    direction: 1,
  },
  {
    id: 2,
    big: "100%",
    smallTop: "",
    smallBottom: "Confidentiality",
    rotateDuration: 16,
    direction: -1,
  },
  {
    id: 3,
    big: "5+",
    smallTop: "",
    smallBottom: "Years of Expertise",
    rotateDuration: 10,
    direction: 1,
  },
];

export default function EdgeStatsCircles() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Small intro text */}
      <p className="text-center text-3xl underline text-pink-600 font-[cursive] italic  mb-8">
        Our Edge: Exclusive Profiles, Dedicated Managers & Trusted Matrimonial
        Services
      </p>

      {/* layout: horizontal on md+, stacked on sm */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-8">
        {items.map((it) => (
          <div key={it.id} className="w-full md:w-1/3 flex justify-center">
            {/* container for positioning rotating ring (absolute) and inner content */}
            <div className="relative flex items-center justify-center mt-10">
              {/* Rotating whole circle including content */}
              <motion.div
                style={{ rotate: 1 }}
                animate={{ rotate: it.direction === 1 ? 360 : -360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: it.rotateDuration,
                }}
                className="relative flex items-center justify-center"
              >
                {/* Outer decorative ring */}
                <div className="absolute rounded-full border-2 border-pink-300 w-48 h-48 md:w-56 md:h-56" />

                {/* subtle shadow outer stroke (duplicate ring to mimic double circle) */}
                <div className="absolute rounded-full w-52 h-52 md:w-60 md:h-60 transform translate-x-1 translate-y-1 border border-gray-200 opacity-70" />

                {/* Inner circle with content (this will also rotate now) */}
                <div className="bg-amber-100 w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="text-xl italic md:text-2xl font-bold text-pink-600">
                    {it.big}
                  </div>
                  <div className="mt-2 text-sm italic font-[cursive] md:text-sm text-pink-600">
                    {it.smallTop && <div>{it.smallTop}</div>}
                    <div>{it.smallBottom}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
