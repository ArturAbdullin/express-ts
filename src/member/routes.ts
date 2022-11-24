import { Router } from "express";
import { getAllMembers, getMember } from "./controller";

const router = Router();

// get all members from the database
router.get("/", getAllMembers);
// get a member by id
router.get("/:id", getMember);

export default router;
