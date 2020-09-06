const router = require('express').Router();
const SubmittedFortune = require('../models/fortune');

// Get 1 random user submitted fortune from the database
router.get('/api/fortunes', (req, res) => {
    SubmittedFortune.aggregate([
        { $sample: {
            size: 1
        }}
    ])
    .then(values => res.json(values))
    });

// Post a user submitted fortune to the database
router.post('/api/fortunes', (req, res) => {
    const data = new SubmittedFortune(req.body);
    data.save()
        .then(data => {
            res.json('we did it');
        })
        .catch(err => {
            res.status(400).send("Unable to save");
        });
});

module.exports = router;