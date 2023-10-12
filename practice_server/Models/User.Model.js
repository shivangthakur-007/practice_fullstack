import { Schema, model } from "mongoose";

const userSchema= new Schema({
    fullName: {
        type: String,
        required: [true, 'name is required'],
        minLength:[3, 'Name is not less than 5'],
        maxLength: [20, 'Name is not more than 20'],
        lowerCase: true,
        trim: true,
    },
});
const User= model("User", userSchema);

export default User;