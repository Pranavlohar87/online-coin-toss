import React from 'react';

export default function CoinTossApp() {
  const [result, setResult] = React.useState('Heads');
  const [flipping, setFlipping] = React.useState(false);
  const [selectedSide, setSelectedSide] = React.useState('Heads');

  const tossCoin = () => {
    setFlipping(true);

    setTimeout(() => {
      setResult(selectedSide);
      setFlipping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-6">
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">

        {/* Hidden Secret Buttons */}
        <div className="absolute top-0 right-0 opacity-0 flex gap-2 p-3">
          <button
            onClick={() => setSelectedSide('Heads')}
            className="px-3 py-1"
          >
            H
          </button>

          <button
            onClick={() => setSelectedSide('Tails')}
            className="px-3 py-1"
          >
            T
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-slate-800">
          Online Coin Toss
        </h1>

        <div className="flex justify-center mb-6">
          <div
            className={`w-40 h-40 rounded-full border-8 border-yellow-400 flex items-center justify-center text-3xl font-bold bg-yellow-300 shadow-xl transition-transform duration-1000 ${
              flipping ? 'rotate-[1440deg]' : ''
            }`}
          >
            {result === 'Heads' ? 'H' : 'T'}
          </div>
        </div>

        <p className="text-2xl font-semibold text-slate-700 mb-6">
          {flipping ? 'Flipping...' : result}
        </p>

        <button
          onClick={tossCoin}
          disabled={flipping}
          className="px-6 py-3 rounded-2xl bg-slate-900 text-white text-lg font-medium hover:scale-105 transition-transform disabled:opacity-50"
        >
          Toss Coin
        </button>
      </div>
    </div>
  );
}
