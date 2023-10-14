import { Router } from "express";
import { createStore, getAllStores } from "../Controllers/store.js";

const router= Router();

router.get('/get', getAllStores);
router.post('/post', createStore);

export default router;

