import cloudinary from "cloudinary";
import Store from "../Models/store.model.js";
import appError from "../utils/error.Utiils.js";
import fs from "fs/promises";

const getAllStores = async (req, res, next) => {
  try {
    const store = await Store.find({});
    res.status(200).json({
      success: true,
      message: "All stores",
      store,
    });
  } catch (e) {
    return next(new appError(e.message, 401));
  }
};
const createStore = async (req, res, next) => {
  try {
    const { name, addresses} = req.body;

    // if (!name || !addresses) {
    //   return next(new appError("all the fields are required", 402));
    // }
    
    const store = await Store.create({
      name,
      addresses,
      // galleryImages: {
      //   public_id: "dummy",
      //   secure_url: "dummy",
      // },
    });

    if (!store) {
      return next(new appError("Could not be created, Please try again", 403));
    }

    // console.log("result", JSON.stringify(req.file));

    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "new",
        });

        if (result) {
          store.galleryImages.public_id = result.public_id;
          store.galleryImages.secure_url = result.secure_url;
        }
        // delete the file
        fs.rm(`uploads/${req.file.filename}`);
      } catch (e) {
        return next(new appError(e.message, 404));
      }
    }

    await store.save();

    res.status(200).json({
      success: true,
      message: "Store created successfully",
      store,
    });
  } catch (e) {
    return next(new appError(e.message, 500));
  }
};

export { getAllStores, createStore };
