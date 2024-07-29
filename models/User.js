import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpick: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    done : { type: Boolean, default: false }
});

export default mongoose.models.User || model("User", UserSchema);
