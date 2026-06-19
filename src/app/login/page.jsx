"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert("Giriş işlemi henüz aktif değil. Yakında eklenecek!");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-5">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-amber-600">
          Giriş Yap
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 opacity-80"
            >
              E-posta
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-amber-600 transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 opacity-80"
            >
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent outline-none focus:border-amber-600 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors cursor-pointer"
          >
            Giriş Yap
          </button>
        </form>
        <p className="text-center mt-6 text-sm opacity-60">
          Hesabınız yok mu?{" "}
          <span className="text-amber-600 cursor-pointer hover:underline">
            Kayıt Ol
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
