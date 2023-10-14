import { Schema, model } from "mongoose";

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minLength: [3, "name is not less than 5"],
      maxLength: [60, "name is not more than 20 required"],
      trim: true,
    },
    addresses: {
      type: String,
      required: [true, "address is required"],
      minLength: [8, "Description must be atleast 8 characters"],
      maxLength: [200, "Description should be less than 200 characters"],
    },
    GalleryImages: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Store = model("Store", storeSchema);

export default Store;
