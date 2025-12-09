import { Router } from "express";
import {
	createPatient,
	getAllPatients,
	getPrescriptionsByPatientId,
	createPrescriptionByPatientId,
	deletePrescriptionByPatientId,
	getPatientById,
	patchPatientById,
	deletePatientById,
} from "../controllers/patients.controller.js";

const patientsRouter = Router();

patientsRouter.route("/").post(createPatient).get(getAllPatients);

patientsRouter
	.route("/:id")
	.get(getPatientById)
	.patch(patchPatientById)
	.delete(deletePatientById);

patientsRouter
	.route("/:id/prescriptions")
	.get(getPrescriptionsByPatientId)
	.post(createPrescriptionByPatientId)
	.delete(deletePrescriptionByPatientId);

export default patientsRouter;
