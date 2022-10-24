import { FC, useEffect, useState } from 'react';
import { getRandomColor, getRandomIndex } from './utils/getRandomColor';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const [className, setClassName] = useState<string>('');
  const [randomColors, setRandomColors] = useState<string[]>(
    new Array(4).fill('').map(color => getRandomColor())
  );
  const [correctColor, setCorrectColor] = useState<string>(
    randomColors[getRandomIndex(4)]
  );
  const [correctGuess, setCorrectGuess] = useState<boolean | null>(null);

  const resetGame = () => {
    const newColors = new Array(4).fill('').map(color => getRandomColor());
    setRandomColors(newColors);
    setCorrectColor(newColors[getRandomIndex(4)]);
    setCorrectGuess(null);
    setClassName('bg-slate-400');
  };

  const handleGuess = (color: string) => {
    if (color === correctColor) {
      setClassName('border-2 border-green-400');
      setCorrectGuess(true);
    } else {
      setClassName('border-2 border-red-400');
      setCorrectGuess(false);
    }
  };
  return (
    <div className="App flex max-w-7xl flex-col justify-center items-center m-auto h-full">
      <div
        className={`color-container p-8 rounded-md bg-slate-500 ${className}`}
      >
        <h2 className="text-2xl text-center">Guess the Color?</h2>
        <div
          style={{ backgroundColor: correctColor }}
          className="mt-4 h-[300px] w-[300px] rounded-md"
        ></div>
      </div>
      {correctGuess === false && (
        <p className="mt-4 italic text-red-400">Wrong Answer! Try Again</p>
      )}
      {correctGuess === true && (
        <>
          <p className="mt-4 italic text-green-400">Well done!</p>
          <button
            onClick={resetGame}
            className="bg-pink-500 p-2 rounded-md mt-2 text-sm"
            type="button"
          >
            New Game
          </button>
        </>
      )}
      <div className="button-container grid gap-4 grid-cols-2 w-1/2 mx-auto mt-6">
        {randomColors.map((color, i) => (
          <button
            onClick={() => handleGuess(color)}
            type="button"
            key={i}
            className="p-2 bg-slate-400 rounded-xl transition-all text-slate-800 font-bold hover:bg-slate-300"
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
