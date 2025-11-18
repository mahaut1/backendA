import { Router } from "express";
const router = Router();

// tes routes ici
// exemple :
router.get("/", (req, res) => {
  res.json({ message: "Doctors OK" });
});

export default router;
