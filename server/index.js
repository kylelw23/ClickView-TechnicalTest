import express from "express";
import bodyParser from "body-parser";

import playlistsRoutes from "./routes/playlist.js";

const app = express();
const PORT = 5000;

//Using Json data for the whole application
app.use(bodyParser.json());

app.use("/playlist", playlistsRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
