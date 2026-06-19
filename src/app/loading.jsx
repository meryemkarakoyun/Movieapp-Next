import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-600/10 rounded-full"></div>

        <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-600 rounded-full animate-pulse"></div>
      </div>

      <div className="text-xl font-black text-amber-600 animate-pulse tracking-[0.2em] uppercase mt-4">
        Yükleniyor
      </div>
    </div>
  );
};

export default Loading;
