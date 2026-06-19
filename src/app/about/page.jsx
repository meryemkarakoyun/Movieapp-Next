import React from "react";

export const metadata = {
  title: "Hakkımızda | MovieApp",
  description: "MovieApp hakkında bilgi edinin",
};

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600">
        Hakkımızda
      </h1>
      <div className="space-y-6 text-lg leading-relaxed opacity-90">
        <p>
          <strong>MovieApp</strong>, en güncel film bilgilerini keşfetmenizi
          sağlayan modern bir web uygulamasıdır. TMDB (The Movie Database) API
          kullanarak size en popüler, en yüksek puanlı ve yakında gelecek
          filmleri sunar.
        </p>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-amber-600">Özellikler</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🎬 Popüler, en yüksek puanlı ve yakında gelecek filmler</li>
            <li>🔍 Film arama özelliği</li>
            <li>🌙 Karanlık / Aydınlık tema desteği</li>
            <li>📱 Mobil uyumlu tasarım</li>
          </ul>
        </div>
        <p>
          Bu proje{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:opacity-75 transition-opacity"
          >
            Next.js
          </a>{" "}
          ve{" "}
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 underline hover:opacity-75 transition-opacity"
          >
            TMDB API
          </a>{" "}
          kullanılarak geliştirilmiştir.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
