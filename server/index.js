import express from "express";
import bodyParser from "body-parser";

import playlistsRoutes from "./routes/playlist.js";
import videoRoutes from "./routes/video.js";

const app = express();
const PORT = 5000;

//Using Json data for the whole application
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }

  // Pass next middleware
  next();
});

app.use("/playlist", playlistsRoutes);
app.use("/video", videoRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
