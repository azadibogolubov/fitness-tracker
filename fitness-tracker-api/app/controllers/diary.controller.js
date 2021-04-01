
const db = require("../models");
const Diary = db.diaries;

// Create and Save a new Diary
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userId || !req.body.date || !req.body.caloriesConsumed || !req.body.caloriesBurned) {
        res.status(400).send({
            message: "Missing required field!"
        });
        return;
    }

    // Create a Diary
    const ingredient = {
        userId: req.body.userId,
        date: req.body.date,
        caloriesConsumed: req.body.caloriesConsumed,
        caloriesBurned: req.body.caloriesBurned,
    };

    // Save Diary in the database
    Diary.create(ingredient)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Diary."
            });
        });
};

// Retrieve all Diarys from the database.
exports.findAll = (req, res) => {
    console.log(`Diary: ${Diary}`)
    Diary.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Diaries."
            });
        });
};

// Find a single Diary with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Diary.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving Diary with id: ${id}`
            });
        });
};

// Update a Diary by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Diary.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Diary was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Diary with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Diary with id: ${id}`
            });
        });
};

// Delete a Diary with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Diary.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Diary was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Diary with id: ${id}. Maybe Diary was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Diary with id: ${id}`
            });
        });
};

// Delete all Diarys from the database.
exports.deleteAll = (req, res) => {
    Diary.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Diarys were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all diaries."
            });
        });
};