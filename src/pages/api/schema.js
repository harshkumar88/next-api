import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { strict: "throw" }
);

const contentSchema = new mongoose.Schema({
  data: mongoose.Schema.Types.Mixed,
});

export { userSchema, contentSchema };
