import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const { keyword } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${keyword}&language=en-US&include_adult=false`,
  );

  const data = await res.json();

  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-amber-600 border-b pb-4 border-amber-600/20">
        "{decodeURIComponent(keyword)}" için arama sonuçları
      </h2>

      {!data?.results || data.results.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <div className="text-6xl mb-4 animate-bounce">🔍</div>
          <div className="text-2xl font-semibold opacity-70">
            Aranılan içerik bulunamadı!
          </div>
          <p className="opacity-50 mt-2 text-lg">
            Lütfen farklı kelimelerle tekrar aramayı deneyin.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-6">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
