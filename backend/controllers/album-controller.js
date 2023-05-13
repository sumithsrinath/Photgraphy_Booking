import jwt from "jsonwebtoken";
import Album from "../models/Album";
import mongoose from "mongoose";
import Admin from "../models/Admin";
export const addAlbum = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1];
  if (!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token Not Found" });
  }

  let adminId;
  // verify token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  //create new movie
  const { title, description, releaseDate, albumUrl, featured, inframes } =
    req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() == "" &&
    !albumUrl &&
    albumUrl.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let album;
  try {
    album = new Album({
      description,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      inframes,
      admin: adminId,
      albumUrl,
      title,
    });

    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminId);
    session.startTransaction();
    await album.save({ session });
    adminUser.addedAlbums.push(album);
    await adminUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!album) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ album });
};

export const getAllAlbums = async (req, res, next) => {
  let albumes;

  try {
    albumes = await Album.find();
  } catch (err) {
    return console.log(err);
  }

  if (!albumes) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ albumes });
};

export const getAlbumById = async (req, res, next) => {
  const id = req.params.id;
  let album;
  try {
    album = await Album.findById(id);
  } catch (err) {
    return console.log(err);
  }

  if (!album) {
    return res.status(404).json({ message: "Invalid Album ID" });
  }

  return res.status(200).json({ album });
};
