const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=["shows"]
    const result = await mongodb.getDatabase().db('project2').collection('shows').find();
    result.toArray().then((shows) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(shows);
    console.log(shows);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=["shows"]
    const showId = ObjectId.createFromHexString(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('shows').find({ _id: showId });
    result.toArray().then((shows) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(shows[0]);
    console.log(shows);
    });
};

const createUser = async (req, res) => {
    //#swagger.tags=["shows"]
    const show = {
        name: req.body.name,
        seasons: req.body.seasons,
        episodes: req.body.episodes
    };

    const response = await mongodb.getDatabase().db('project2').collection('shows').insertOne(show);

    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the user.');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags=["shows"]
    const showId = ObjectId.createFromHexString(req.params.id);
    const show = {
        name: req.body.name,
        seasons: req.body.seasons,
        episodes: req.body.episodes
    };

    const response = await mongodb.getDatabase().db('project2').collection('shows').replaceOne({ _id: showId }, show);

    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=["shows"]
    const showId = ObjectId.createFromHexString(req.params.id);
    const show = {
        name: req.body.name,
        seasons: req.body.seasons,
        episodes: req.body.episodes
    };

    const response = await mongodb.getDatabase().db('project2').collection('shows').deleteOne({ _id: showId });

    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user.');
    }
};

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};