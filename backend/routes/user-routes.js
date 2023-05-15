import express from "express";
import {
  deleteUser,
  getAllUsers,
  getBookingsOfUser,
  login,
  singup,
  updateUser,
} from "../controllers/user-controllers";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;
