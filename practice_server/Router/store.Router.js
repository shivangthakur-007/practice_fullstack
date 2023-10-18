import { Router } from "express";
import { createStore, getAllStores } from "../Controllers/store.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

router.route("/get").get(upload.single("GalleryImages"), getAllStores);

router.route("/post").post(createStore);

export default router;
