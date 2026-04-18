import { useState } from "react";
import "./Store.scss";

export default function Store() {
  const [games, setGames] = useState([]);

  const searchGames = async (query) => {
    if (!query) return;

    const res = await fetch(`http://localhost:3001/api/search?q=${query}`);
    const data = await res.json();

    setGames(data);
  };

  return (
    <div className="page-store">
      <h1>Store</h1>

      <input
        className="store__input"
        placeholder="Search games..."
        onChange={(e) => searchGames(e.target.value)}
      />

      <div className="store__list">
        {games.map((game) => (
          <div key={game.id} className="store__card">
            <img src={game.background_image} />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}