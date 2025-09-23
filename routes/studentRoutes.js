import express from "express";
import { listStudents, listStudentsAPI, addStudent } from "../controllers/studentControllers.js";

const router = express.Router();

router.get("/", listStudents);
router.post("/", addStudent);


router.get("/api", listStudentsAPI);


export default router;
