import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  //replaced movies to albums
  addedAlbums: [
    {
      type: mongoose.Types.ObjectId,
      //replaced movie to album
      ref: "Album",
    },
  ],
});

export default mongoose.model("Admin", adminSchema);
