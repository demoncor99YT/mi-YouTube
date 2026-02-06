import fetch from "node-fetch";

export default async function handler(req, res) {
    const query = req.query.q; // la búsqueda que viene de tu web
    const API_KEY = "TU_API_KEY"; // pon aquí tu API Key

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=6&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // permite que tu web acceda
    res.status(200).json(data); // devuelve los resultados a tu web
}
