import mongoose from "mongoose";




let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) return;
  await mongoose.connect("mongodb://127.0.0.1:27017/coffee?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2");
  isConnected = true;
};

export default connectToDatabase;