
import { useState } from "react";

const choices = [
  { name: "Rock", emoji: "✊" },
  { name: "Paper", emoji: "✋" },
  { name: "Scissors", emoji: "✌️" },
];

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("Make your move!");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // TODO: Implement game logic
  const handlePlay = (choice) => {

  };

  // TODO: Implement game reset
  const handleReset = () => {

  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Rock Paper Scissors</h1>
          <p className="text-slate-400 mt-2">
            Challenge the computer!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-5 text-center">
            <p className="text-slate-400 text-sm">You</p>
            <p className="text-3xl font-bold mt-1">{playerScore}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5 text-center">
            <p className="text-slate-400 text-sm">Computer</p>
            <p className="text-3xl font-bold mt-1">{computerScore}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 text-center">
          <div>
            <p className="text-slate-400 text-sm mb-3">Your Choice</p>
            <div className="bg-slate-800 rounded-xl p-6 text-5xl">
              {playerChoice?.emoji || "❔"}
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-sm mb-3">Computer Choice</p>
            <div className="bg-slate-800 rounded-xl p-6 text-5xl">
              {computerChoice?.emoji || "❔"}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl font-bold">{result}</p>
        </div>

        <p className="text-center text-slate-400 text-sm mb-4">
          Choose your move
        </p>

        <div className="grid grid-cols-3 gap-3">
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => handlePlay(choice)}
              className="bg-indigo-600 hover:bg-indigo-500 rounded-xl p-4 transition-colors"
            >
              <span className="block text-3xl mb-2">
                {choice.emoji}
              </span>
              <span className="font-semibold text-sm">
                {choice.name}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="w-full mt-5 bg-slate-800 hover:bg-slate-700 rounded-xl py-3 font-semibold"
        >
          Reset Game
        </button>

      </div>
    </div>
  );
}
