const express = require('express');
const router = express.Router();

const messages = [
    {
        id: 1,
        text: 'This if the first message.',
        from: 'Levi Liester'
    },
    {
        id: 2,
        text: 'This message comes directly after the first one, also known as second message.',
        from: 'Levi Liester'
    },
    {
        id: 3,
        text: 'Third times the charm.',
        from: 'Levi Liester'
    },
    {
        id: 4,
        text: 'The last of our initial messages.  Its all live from here!',
        from: 'Levi Liester'
    }
]

router.get('/', function(req, res, next) {
    res.send(messages);
});

router.put('/', function(req, res, next) {
    console.log(JSON.stringify(req.body))
    messages.push(req.body)
    res.send(messages)
});

module.exports = router;
