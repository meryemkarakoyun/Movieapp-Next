"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }) => {
  const router = useRouter();

  console.log(dt, "dt");
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="relative w-87.5 h-50 cursor-pointer group overflow-hidden"
    >
      <Image
        style={{ objectFit: "cover" }}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt={dt?.title || dt?.name || "Movie Image"}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white z-10">
        <div className="font-bold text-lg">{dt?.title || dt?.name}</div>
        <div>
          {dt?.release_date || dt?.first_air_date} - {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
