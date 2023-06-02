// routes/user.js

const express = require('express');
const router = express.Router();
const userReports = require('../models/reports'); 





router.get('/report/:emailId', async (req, res) => {
  try{

    const emailId = req.params.emailId;

    console.log(emailId);
    console.log("ayush");
  
    
    const reports = await userReports.findOne({emailId : emailId}); 
  
    if (!reports) {
      return res.status(404).json({ error: 'User reports not found' });
    }
    
    console.log(reports.json());
    
    res.status(200).json(reports);

  }catch (e) {
    console.log("Not working");
  }
  
});

module.exports = router;
