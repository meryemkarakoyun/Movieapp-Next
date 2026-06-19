import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=0f39400eb6fda7ebbee81d6025f1b7c2`,
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const { id } = await params;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center p-5 md:p-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          style={{ objectFit: "cover" }}
          fill
          priority
          src={`https://image.tmdb.org/t/p/original/${
            movieDetail?.backdrop_path || movieDetail?.poster_path
          }`}
          alt={movieDetail?.title || movieDetail?.name || "Movie Image"}
          className="opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full bg-white/10 dark:bg-black/20 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
        <div className="relative w-full md:w-1/3 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image
            style={{ objectFit: "cover" }}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            src={`https://image.tmdb.org/t/p/original/${
              movieDetail?.poster_path || movieDetail?.backdrop_path
            }`}
            alt={movieDetail?.title || movieDetail?.name || "Movie Image"}
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
            {movieDetail?.title || movieDetail?.name}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm font-medium">
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full shadow-lg">
              {movieDetail?.release_date?.split("-")[0] ||
                movieDetail?.first_air_date?.split("-")[0]}
            </span>
            <span className="flex items-center gap-1 border border-amber-600/50 px-3 py-1 rounded-full">
              ⭐ {movieDetail?.vote_average?.toFixed(1)} / 10
            </span>
            {movieDetail?.runtime && (
              <span className="opacity-70 italic">
                {movieDetail?.runtime} dakika
              </span>
            )}
          </div>

          <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-2xl">
            {movieDetail?.overview}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
              Fragmanı İzle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
