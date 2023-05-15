import express from "express";
import { addAdmin, adminLogin } from "../controllers/admin-controller";

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/login", adminLogin);

export default adminRouter;
