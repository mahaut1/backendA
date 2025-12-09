import { Router } from "express";
import {
	createPrescription,
	getAllPrescriptions,
	getPrescriptionById,
	deletePrescriptionById,
} from "../controllers/prescription.controller.js";

const prescriptionRouter = Router();

prescriptionRouter.route("/").post(createPrescription).get(getAllPrescriptions);

prescriptionRouter
	.route("/:id")
	.get(getPrescriptionById)
	.delete(deletePrescriptionById);

export default prescriptionRouter;
