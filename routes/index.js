const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const Topic = require('../models/topic');
const TopicNote = require('../models/topicnote');
const router = express.Router();

router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { name, position, company } = req.body;

    const newUser = new User({
        position,
        name,
        company,
        date: Date.now()
    });
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            position,
            company
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});


router.get('/users', async (req, res) => {

    try {
        const users = await User.find({});

        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});


router.get('/topics', async (req, res) => {

    try {
        const topics = await TopicNote.find({});

        return res.json({
            topics
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.post('/topics', async (req, res) => {

    // console.log(req.body);
    const topicNote = new TopicNote({
        topicTitle: req.body.topicTitle,
        description: req.body.description
    });
    try{
        const savedNote = await topicNote.save();
        res.json(savedNote);
    }catch(err){
        res.json({message:err})
    }

});


module.exports = router;