
const db = require("../models");
const Ingredient = db.ingredients;

// Create and Save a new Ingredient
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userId || !req.body.name || !req.body.quantity || !req.body.unit) {
        res.status(400).send({
            message: "Missing required field!"
        });
        return;
    }

    // Create a Ingredient
    const ingredient = {
        userId: req.body.userId,
        name: req.body.name,
        quantity: req.body.quantity,
        unit: req.body.unit,
    };

    // Save Ingredient in the database
    Ingredient.create(ingredient)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Ingredient."
            });
        });
};

// Retrieve all Ingredients from the database.
exports.findAll = (req, res) => {
    console.log(`Ingredient: ${Ingredient}`)
    Ingredient.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Ingredients."
            });
        });
};

// Find a single Ingredient with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingredient.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving Ingredient with id: ${id}`
            });
        });
};

// Update a Ingredient by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Ingredient.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingredient was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Ingredient with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Ingredient with id: ${id}`
            });
        });
};

// Delete a Ingredient with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ingredient.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingredient was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Ingredient with id: ${id}. Maybe Ingredient was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Ingredient with id: ${id}`
            });
        });
};

// Delete all Ingredients from the database.
exports.deleteAll = (req, res) => {
    Ingredient.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Ingredients were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ingredients."
            });
        });
};