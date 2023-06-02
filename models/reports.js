const mongoose = require("mongoose");




const userReportSchema = {
  
  
      name: { type: "string" },
      grade: { type: "string" },
      weeks: {
        type: "array",
        minItems: 1,
        uniqueItems: true,
        items: {
          type: "object",
          required: [
            "weekId",
            "startingDate",
            "endingDate",
            "mentorFeedback",
            "timeManagement",
            "overallAssessments",
            "communicationSkills",
            "attendanceParticipation",
            "assignment"
          ],
          properties: {
            weekId: { type: "string" },
            startingDate: { type: "string" },
            endingDate: { type: "string" },
            mentorFeedback: {
              type: "array",
              minItems: 1,
              uniqueItems: true,
              items: { type: "string" }
            },
            timeManagement: { type: "string" },
            overallAssessments: { type: "string" },
            communicationSkills: { type: "string" },
            attendanceParticipation: { type: "string" },
            assignment: { type: "string" }
          }
        }
      },
      emailId: { type: "string" },
      assessment: { type: "string" },
      totalScore: { type: "string" },
      mockProject: { type: "string" },
      timeManagement: { type: "string" },
      communicationSkills: { type: "string" },
      attendanceParticipation: { type: "string" }
    
  };

  const UserReport = new mongoose.model("reports",userReportSchema);
module.exports = UserReport;