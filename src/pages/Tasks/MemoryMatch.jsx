
import { useState } from "react";

const cards = [
  { id: 1, value: "🍎" },
  { id: 2, value: "🍌" },
  { id: 3, value: "🍇" },
  { id: 4, value: "🍊" },
  { id: 5, value: "🍎" },
  { id: 6, value: "🍌" },
  { id: 7, value: "🍇" },
  { id: 8, value: "🍊" },
];

export default function MemoryMatch() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  // TODO: Implement card flipping logic
  const handleCardClick = (card) => {

  };

  // TODO: Implement game restart
  const handleRestart = () => {

  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Memory Match</h1>
            <p className="text-slate-400 text-sm">
              Find all matching pairs!
            </p>
          </div>

          <div className="text-right">
            <p className="text-slate-400 text-sm">Moves</p>
            <p className="text-2xl font-bold">{moves}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id);
            const isMatched = matchedCards.includes(card.id);

            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`aspect-square rounded-xl text-3xl transition-colors
                  ${isMatched
                    ? "bg-green-500/20 border border-green-500"
                    : isFlipped
                    ? "bg-indigo-500"
                    : "bg-slate-800 hover:bg-slate-700"
                  }`}
              >
                {isFlipped || isMatched ? card.value : "?"}
              </button>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm mb-3">
            Matched: {matchedCards.length / 2} / 4
          </p>

          {matchedCards.length === 8 && (
            <p className="text-green-400 font-bold mb-3">
              🎉 Congratulations! You won!
            </p>
          )}

          <button
            onClick={handleRestart}
            className="bg-white text-slate-950 px-6 py-2 rounded-lg font-semibold"
          >
            Restart Game
          </button>
        </div>

      </div>
    </div>
  );
}
