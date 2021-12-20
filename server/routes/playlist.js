import express from "express";
import playlistData from "../data/playlist.js";
import videoData from "../data/videos.js";

const router = express.Router();

let playlist = playlistData;
let videos = videoData;
//All routes in here are starting with /playlists
// Retrieve a new playlist
router.get("/", (req, res) => {
  res.send(playlist);
});

// Create a new playlist
router.post("/", (req, res) => {
  const playlistObject = req.body;
  playlist.push(playlistObject);
  res.send(
    `PLaylist with the name ${playlistObject.name} added to the database!`
  );
});

// Delete an existing playlist
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const playlistObject = playlist.find((playlist) => playlist.id == id);
  if (playlistObject == undefined) {
    throw new Error(`Playlist with id: ${id} does not exist`);
  }
  delete playlist[playlist.indexOf(playlistObject)];
  res.send(
    `PLaylist with the name ${playlistObject.name} deleted from the database!`
  );
});

// Add a video to an existing playlist
router.patch("/addVideo", (req, res) => {
  const { id, videoId } = req.body;

  const playlistObject = playlist.find((playlist) => playlist.id == id);
  if (playlistObject == undefined) {
    throw new Error(`Playlist with id: ${id} does not exist`);
  }
  if (videos.indexOf(videoId) == -1) {
    playlistObject.videoIds.push(videoId);
    res.send(`Video with id ${videoId} is added to the playlist!`);
  } else {
    throw new Error(`Video with id: ${videoId} does not exist`);
  }
});

// Remove a video from an existing playlist
router.patch("/removeVideo", (req, res) => {
  const { id, videoId } = req.body;

  const playlistObject = playlist.find((playlist) => playlist.id == id);
  if (playlistObject == undefined) {
    throw new Error(`Playlist with id: ${id} does not exist`);
  }
  if (videos.indexOf(videoId) == -1) {
    playlistObject.videoIds = playlistObject.videoIds.filter(
      (x) => x !== videoId
    );

    res.send(`Video with id ${videoId} is deleted from the playlist!`);
  } else {
    throw new Error(`Video with id: ${videoId} does not exist`);
  }
});

//Retrieve all videos in a playlist
router.get("/videos", (req, res) => {
  const { id } = req.body;
  const playlistObject = playlist.find((playlist) => playlist.id == id);
  if (playlistObject == undefined) {
    throw new Error(`Playlist with id: ${id} does not exist`);
  }
  let result = [];
  for (let i = 0; i < playlistObject.videoIds.length; i++) {
    result.push(videos.find((x) => x.id === playlistObject.videoIds[i]));
  }
  res.send(result);
});

export default router;
