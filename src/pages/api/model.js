// User.js

import mongoose from "mongoose";
import { contentSchema, userSchema } from "./schema";
import { connectDB } from "./db";
connectDB();
const User = mongoose.model("User", userSchema);
const Content = mongoose.model("Content", contentSchema);

export { User, Content };
