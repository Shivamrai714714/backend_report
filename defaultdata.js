const testData = require("./constant/test");
const UserReport = require("./models/reports");

const DefaultData = async()=>{
    try { 
        await UserReport.deleteMany({});
        const storeData = await UserReport.insertMany(testData);
       console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;