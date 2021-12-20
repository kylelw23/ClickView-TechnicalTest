import express from "express";
import videoData from "../data/videos.js";

const router = express.Router();

let videos = videoData;
//All routes in here are starting with /playlists
// Retrieve a new playlist
router.get("/", (req, res) => {
  res.send(videos);
});

export default router;
