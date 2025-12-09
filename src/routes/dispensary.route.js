import { Router } from "express";
import {
	createDispensary,
	getAllDispensaries,
	getDispensaryById,
	patchDispensaryById,
	deleteDispensaryById,
} from "../controllers/dispensary.controller.js";

const dispensaryRouter = Router();

dispensaryRouter.route("/").post(createDispensary).get(getAllDispensaries);

dispensaryRouter
	.route("/:id")
	.get(getDispensaryById)
	.patch(patchDispensaryById)
	.delete(deleteDispensaryById);

export default dispensaryRouter;
