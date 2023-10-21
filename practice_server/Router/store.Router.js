import { Router } from "express";
import { createStore, getAllStores } from "../Controllers/store.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

router.get("/get", getAllStores);
router.post("/post", upload.single('galleryImages'),  createStore);
// router.post("/post", upload.any(),  createStore);

export default router;