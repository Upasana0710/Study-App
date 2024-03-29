import express from "express";
import {
  register,
  login,
  addSubjects,
  getUser,
  searchUser,
  createSlots,
  getTeacherSlots,
  updateTeachRating,
  getByToken,
  getUserSubjects,
} from "../controllers/user.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", getUser);
router.get("/getByToken", [auth], getByToken);
router.get("/search", [auth], searchUser);

// router.patch("/addInfo", [auth], addSubjects);
// router.get("/getInfo", [auth], getUserSubjects);
// router.patch("/createSlots", [auth], createSlots);
// router.post("/display", [auth], getTeacherSlots);
// router.patch("/rating", [auth], updateTeachRating);

export default router;
