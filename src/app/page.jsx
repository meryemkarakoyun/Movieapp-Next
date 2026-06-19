import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const { genre } = await searchParams;

  const res = await fetch(
    `https://api.themoviedb.org/3/${genre ? "movie/" + genre : "trending/all/day"}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } },
  );

  const data = await res.json();

  console.log(data, "data");

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-10">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
