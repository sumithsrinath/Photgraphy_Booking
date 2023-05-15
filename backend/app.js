import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import albumRouter from "./routes/album-routes.js";
import bookingsRouter from "./routes/bookings-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

//middlewars
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5000"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/album", albumRouter);
app.use("/booking", bookingsRouter);
mongoose
  .connect(
    `mongodb+srv://dbUser:${process.env.MONGODB_PASSWORD}@cluster0.gctejbv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Conected to database and server is running")
    )
  )
  .catch((e) => console.log(e));

//xffvUuMdCnCqY3uF-password
//1CeQDpmRDpHLhhIb-userpassword

//Movie-->Album
//Movies-->Albums
//Actore-->inframes
//posterUrl--albumUrl
//seatNumber-->albumNumber
