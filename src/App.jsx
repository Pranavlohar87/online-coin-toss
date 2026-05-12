import React, { useState } from "react";

export default function CoinTossApp() {
  const [result, setResult] = useState("Heads");
  const [selectedSide, setSelectedSide] = useState("Heads");
  const [flipping, setFlipping] = useState(false);

  const tossCoin = () => {
    setFlipping(true);

    setTimeout(() => {
      setResult(selectedSide);
      setFlipping(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-5">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">

        {/* Secret Small Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">

          <button
            onClick={() => setSelectedSide("Heads")}
            className={`w-5 h-5 rounded-full border-2 ${
              selectedSide === "Heads"
                ? "bg-red-500 border-red-700"
                : "bg-red-200 border-red-400"
            }`}
          ></button>

          <button
            onClick={() => setSelectedSide("Tails")}
            className={`w-5 h-5 rounded-full border-2 ${
              selectedSide === "Tails"
                ? "bg-white border-gray-500"
                : "bg-gray-200 border-gray-400"
            }`}
          ></button>

        </div>

        <h1 className="text-4xl font-bold mb-8 text-slate-800">
          Online Coin Toss
        </h1>

        <div className="flex justify-center mb-6">
          <div
            className={`w-40 h-40 rounded-full border-8 border-yellow-400 bg-yellow-300 flex items-center justify-center text-5xl font-bold shadow-xl transition-transform duration-1000 ${
              flipping ? "rotate-[1440deg]" : ""
            }`}
          >
            {result === "Heads" ? "H" : "T"}
          </div>
        </div>

        <p className="text-3xl font-semibold text-slate-700 mb-6">
          {flipping ? "Flipping..." : result}
        </p>

        <button
          onClick={tossCoin}
          disabled={flipping}
          className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50"
        >
          Toss Coin
        </button>
      </div>
    </div>
  );
}
