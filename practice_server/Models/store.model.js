import { Schema, model } from "mongoose";

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: [false, "name is required"],
      minLength: [3, "name is not less than 5"],
      maxLength: [60, "name is not more than 20 required"],
      trim: true
    },

    addresses: {
      type: String,
      required: [false, "address is required"],
      minLength: [8, "addresses must be atleast 8 characters"],
      maxLength: [200, "addresses should be less than 200 characters"],
    },

    galleryImages: {
      public_id: {
        type: String,
        required: false,
      },                                                  
      secure_url: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Store = model("Store", storeSchema);

export default Store;
