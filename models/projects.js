const mongoose = require("mongoose");

const userProjectSchema = {
  Name_of_Mentee: { type: "string" },
  Email_ID: { type: "string" },
  Mentor_Name: { type: "string" },
  Mentor_Email_ID: { type: "string" },
  Use_Case_Understanding_Interpretation: { type: "string" }, //(1-4)
  Logic_Applied: { type: "string" }, //(1-4)
  Tech_learned_Vs_Implemented: { type: "string" }, //(1-4)
  Solution_Explanation_Clarity: { type: "string" }, //(1-4)
  type: { type: "string" },
};

const UserProject = new mongoose.model("reports", userProjectSchema);
module.exports = UserProject;
