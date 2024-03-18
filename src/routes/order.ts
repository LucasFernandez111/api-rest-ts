import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkSession } from "../middleware/session";

const router = Router();
/**
 * Solo pueden acceder con un JWT valido.
 */

router.get("/", checkSession, getItems);

export { router };
