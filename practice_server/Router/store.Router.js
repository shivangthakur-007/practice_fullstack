import { Router } from "express";
import { createStore, getAllStores } from "../Controllers/store.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

router.get("/get", getAllStores);
router.post("/post", upload.single("galleryImages"), createStore);

export default router;
