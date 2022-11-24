import { Router } from "express";
import { getAllMembers, getMember, removeMember } from "./controller";

const router = Router();

// get all members from the database
router.get("/", getAllMembers);
// get a member by id
router.get("/:id", getMember);
// delete a member by id
router.delete("/:id", removeMember);

export default router;
