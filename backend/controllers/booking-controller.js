import Album from "../models/Album";
import Bookings from "../models/Bookings";
import User from "../models/User";
import mongoose from "mongoose";

export const newBooking = async (req, res, next) => {
  const { album, date, albumNumber, user } = req.body;

  let existingAlbum;
  let existingUser;
  try {
    existingAlbum = await Album.findById(album);
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingAlbum) {
    return res.status(404).json({ message: "Movie Not Found With Given ID" });
  }
  if (!user) {
    return res.status(404).json({ message: "User not found with given ID " });
  }

  let booking;

  try {
    const newBookingInstance = new Bookings({
      album,
      date: new Date(`${date}`),
      albumNumber,
      user,
    });

    booking = newBookingInstance;
    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.bookings.push(booking);
    existingAlbum.bookings.push(booking);
    await existingUser.save({ session });
    await existingAlbum.save({ session });
    await booking.save({ session });
    session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to create a booking" });
  }

  if (!booking) {
    return res.status(500).json({ message: "Unable to create a booking" });
  }

  return res.status(201).json({ booking });
};

export const getBookingById = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Bookings.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error" });
  }
  return res.status(200).json({ booking });
};

export const deleteBooking = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Bookings.findByIdAndRemove(id).populate("user album");
    console.log(booking);
    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.user.bookings.pull(booking);
    await booking.album.bookings.pull(booking);
    await booking.album.save({ session });
    await booking.user.save({ session });
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to Delete" });
  }
  return res.status(200).json({ message: "Successfully Deleted" });
};
