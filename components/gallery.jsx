import Image from "next/image";
import React from "react";

export const Gallery = () => {
  return (
    <section className="mt-16">
      <div className="pt-3">
        <h3 className="text-4xl font-bold text-center">Gallery</h3>
      </div>
      <div className="mx-auto mt-5">
        <div className="flex md:flex-wrap flex-col md:flex-row  gap-3 md:gap-0">
          <div className="flex flex-col md:flex-row w-full md:w-1/2 md:flex-wrap gap-3 md:gap-0">
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/01.webp"
              />
            </div>
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/04.webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/05.webp"
              />
            </div>
          </div>
          <div className="flex md:w-1/2 flex-col md:flex-row md:flex-wrap  gap-3 md:gap-0">
            <div className="w-full p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/10.webp"
              />
            </div>
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/15.webp"
              />
            </div>
            <div className="w-full md:w-1/2 p-1 md:p-2">
              <Image
                width={500}
                height={500}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/gallery/07.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
