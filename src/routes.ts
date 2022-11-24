import { Router } from "express";
import memberRoutes from "./member/routes";

const router = Router();

router.use("/members", memberRoutes);

// redirect on host/ to host/members
router.use("/", (req, res) => {
  res.redirect("/members");
});

export default router;
