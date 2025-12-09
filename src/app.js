import express from "express";
import cors from "cors";

import metaRouter from "./routes/meta.route.js";
import doctorRouter from "./routes/doctors.route.js";
import patientsRouter from "./routes/patients.route.js";
import dispensaryRouter from "./routes/dispensary.route.js";
import prescriptionRouter from "./routes/prescription.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/meta", metaRouter);
app.use("/doctors", doctorRouter);
app.use("/patients", patientsRouter);
app.use("/dispensaries", dispensaryRouter);
app.use("/prescriptions", prescriptionRouter);

app.get("/", (req, res) => {
	res.status(200).json({ message: "API Back A OK ✅" });
});

export default app;
