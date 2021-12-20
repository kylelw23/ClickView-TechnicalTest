import express from "express";
import playlist from "../data/playlist.js";

const router = express.Router();

//All routes in here are starting with /playlists
router.get("/", (req, res) => {
  res.send(playlist);
});

export default router;
