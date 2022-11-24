import { Router } from "express";
import { getAllMembers } from "./controller";

const router = Router();

router.get("/", getAllMembers);

export default router;
