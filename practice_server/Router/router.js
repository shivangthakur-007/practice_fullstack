import { Router } from "express";
import bodyParser from "../Controllers/bodyParser.js";

const router= Router();

router.post('/about', bodyParser);

export default router;