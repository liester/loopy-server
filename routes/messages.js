const express = require('express');
const router = express.Router();

const messages = [
    {
        id: 1,
        text: 'This if the first message.',
        from: 'Levi Liester',
        date: new Date()
    },
    {
        id: 2,
        text: 'This message comes directly after the first one, also known as second message.',
        from: 'Levi Liester',
        date: new Date()
    },
    {
        id: 3,
        text: 'Third times the charm.',
        from: 'Levi Liester',
        date: new Date()
    },
    {
        id: 4,
        text: 'The last of our initial messages.  Its all live from here!',
        from: 'Levi Liester',
        date: new Date()
    },
]

router.get('/', function(req, res, next) {
    res.send(messages);
});

router.put('/', function(req, res, next) {
    console.log(JSON.stringify(req.body))
    messages.push({...req.body, date: new Date()})
    res.send(messages)
});

module.exports = router;
