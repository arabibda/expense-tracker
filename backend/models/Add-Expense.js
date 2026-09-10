import mongoose from "mongoose";

const addExpenseSchema = new mongoose.Schema(
  {
    expenseTitle: {
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

export default mongoose.model("addExpense", addExpenseSchema);
