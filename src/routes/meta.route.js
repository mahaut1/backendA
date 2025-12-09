import { Router } from "express";
import {
	getAllSpecialities,
	getSpecialityById,
	createSpeciality,
	updateSpeciality,
	deleteSpeciality,
} from "../controllers/specialities.controller.js";

import {
	getLanguages,
	addLanguage,
	updateLanguage,
	deleteLanguage,
} from "../controllers/languages.controller.js";

import {
	getCurrencies,
	addCurrency,
	updateCurrency,
	deleteCurrency,
} from "../controllers/currencies.controller.js";

const metaRouter = Router();

metaRouter
	.route("/specialities")
	.get(getAllSpecialities)
	.post(createSpeciality);

metaRouter
	.route("/specialities/:id")
	.get(getSpecialityById)
	.put(updateSpeciality)
	.delete(deleteSpeciality);

metaRouter.route("/languages").get(getLanguages).post(addLanguage);
metaRouter.route("/languages/:id").put(updateLanguage).delete(deleteLanguage);

metaRouter.route("/currencies").get(getCurrencies).post(addCurrency);
metaRouter.route("/currencies/:id").put(updateCurrency).delete(deleteCurrency);

export default metaRouter;
