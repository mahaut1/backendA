import { Router } from "express";
import {
	createDoctor,
	getAllDoctors,
	getDoctorById,
	patchDoctorById,
	deleteDoctorById,
	getSpecialitiesByDoctorId,
	addSpecialityToDoctorById,
	removeSpecialityFromDoctorById,
} from "../controllers/doctors.controller.js";

const doctorsRouter = Router();

doctorsRouter.route("/").post(createDoctor).get(getAllDoctors);

doctorsRouter
	.route("/:id")
	.get(getDoctorById)
	.patch(patchDoctorById)
	.delete(deleteDoctorById);

doctorsRouter
	.route("/:id/specialities")
	.get(getSpecialitiesByDoctorId)
	.post(addSpecialityToDoctorById)
	.delete(removeSpecialityFromDoctorById);

export default doctorsRouter;
