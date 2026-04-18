import express from "express";
import cors from "cors";
import dotenv from "dotenv";

console.log("SERVER STARTING...");


dotenv.config({ path: "./server/.env" });

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

console.log("RAWG_KEY:", process.env.RAWG_KEY ? "OK" : "MISSING");
console.log("STEAM_KEY:", process.env.MY_STEAM_API_KEY ? "OK" : "MISSING");


app.get("/api/games/:steamid", async (req, res) => {
  try {
    const { steamid } = req.params;

    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.MY_STEAM_API_KEY}&steamid=${steamid}&include_appinfo=true` 
      //http://localhost:3001/api/search?q=cs
      //http://localhost:3001/api/games/MY_STEAM_API_KEY
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.error("STEAM ERROR:", error);
    res.status(500).json({ error: "Steam error" });
  }
});


app.get("/api/search", async (req, res) => {
  try {
    const query = req.query.q;

    console.log("QUERY:", query);

    if (!query) return res.json([]);

    const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&search=${query}&page_size=10`;

    console.log("FETCHING:", url);

    const response = await fetch(url);

    console.log("STATUS:", response.status);

    const text = await response.text();

    console.log("RAW:", text.slice(0, 200)); 
    const data = JSON.parse(text);

    res.json(data.results || []);

  } catch (error) {
    console.error("RAWG ERROR:", error);
    res.status(500).json({ error: "RAWG error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("SERVER RUNNING!!!");
});