import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CardValidation } from "./card.validation";
import { CardController } from "./card.controller";


const router = express.Router();

router.post(
  "",
  validateRequest(CardValidation.CreateCardValidationSchema),
  CardController.createCard
);

router.get("/:id", CardController.getSingleCards);
router.get("", CardController.getAllCards);


export const CardRoutes = router;
