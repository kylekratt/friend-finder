var Friends = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(Friends);
    })
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var lowestScore = 100;
        var bff;
        Friends.forEach(function (element) {
            var difference = 0;
            for (i = 0; i < 10; i++) {
                difference += Math.abs(element.scores[i] - newFriend.scores[i]);
            }
            if (difference < lowestScore) {
                lowestScore = difference;
                bff = element;
            }
        })
        Friends.push(newFriend);
        if (!bff) {
            res.json(newFriend);
        }
        else
            res.json(bff)
    });
}