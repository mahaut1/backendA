import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import specialityRoutes from "./routes/specialityRoutes.js";
import languageRoutes from "./routes/languageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/doctors", doctorRoutes);
app.use("/specialities", specialityRoutes);
app.use("/languages", languageRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API Back A OK ✅");
});


export default app;
