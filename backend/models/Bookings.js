import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  album: {
    type: mongoose.Types.ObjectId,
    ref: "Album",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  albumNumber: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
