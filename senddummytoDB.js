const mongoose = require("mongoose");

const userReportData = require("./constant/test");
const userProjectData = require("./constant/project");

const senddummydatatoDB = async () => {
  const m_UserReport = require("./models/reports");
  const m_UserProject = require("./models/projects");

  try {
    await m_UserProject.deleteMany({});

    const fakedataproject = await m_UserProject.insertMany(userProjectData);

    console.log("After sending the mock data to the database");
    console.log("----------------------");
    console.log(fakedataproject);
  } catch (e) {
    console.log(e);
    console.log(e.message);
  }
};

module.exports = senddummydatatoDB;

// const mongoose = require("mongoose");

// const userReportData = require("./constant/test");
// const userProjectData = require("./constant/project");

// const m_UserReport = require("./models/reports");
// const m_UserProject = require("./models/projects");

// const senddummydatatoDB = async () => {
//   try {
//     await m_UserReport.deleteMany({});
//     await m_UserProject.deleteMany({});

//     const fakedatareport = await m_UserReport.insertMany(userReportData);
//     const fakedataproject = await m_UserProject.insertMany(userProjectData);

//     console.log("After sending the mock data to database");
//     console.log(fakedatareport);
//     console.log("----------------------");
//     console.log(fakedataproject);
//   } catch (e) {
//     console.log(error);
//     console.log(error.message);
//   }
// };

// module.exports = senddummydatatoDB;

// // const dummyData = require('./constant/dummydata')
// // const userData= require('./models/userData')

// // const senddummydatatoDB = async()=>{
// // try {
// //     //to delete the previous set of data from MongoDB database, otherwise redundancy occures
// // await userData.deleteMany({});
// // const fakeData = await userData.insertMany(dummyData);
// // console.log("After sending the mock data to database");
// // console.log(fakeData);

// // } catch (error) {
// //     console.log(error);
// //     console.log(error.message);
// // }

// // }

// // module.exports=senddummydatatoDB;
