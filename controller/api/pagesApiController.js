const pagesModel = require("../../model/pagesModel");

module.exports = {
    getAll: (req, res) => {
        pagesModel.getAll(req.con, (err, rows) => {
            res.header("Content-Type", 'application/json');
            if (!err) {
                res.send(JSON.stringify(rows, null, 4));
            } else {
                res.status(500).json(JSON.stringify(err, null, 4));
            }
        });
    },
}