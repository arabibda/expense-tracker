import mongoose from "mongoose";

const addIncomeSchema = new mongoose.Schema(
  {
    incomeTitle: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    
     date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("addIncome", addIncomeSchema);
