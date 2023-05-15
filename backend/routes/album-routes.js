import express from "express";
import {
  addAlbum,
  getAlbumById,
  getAllAlbums,
} from "../controllers/album-controller";
const albumRouter = express.Router();
albumRouter.get("/", getAllAlbums);
albumRouter.get("/:id", getAlbumById);
albumRouter.post("/", addAlbum);

export default albumRouter;
