const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=["Accounts"]
    const result = await mongodb.getDatabase().db('project2').collection('accounts').find();
    result.toArray().then((accounts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(accounts);
    console.log(accounts);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=["Accounts"]
    const accountId = ObjectId.createFromHexString(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('accounts').find({ _id: accountId });
    result.toArray().then((accounts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(accounts[0]);
    console.log(accounts);
    });
};

const createUser = async (req, res) => {
    //#swagger.tags=["Accounts"]
    const account = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer
    };

    const response = await mongodb.getDatabase().db('project2').collection('accounts').insertOne(account);

    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the user.');
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags=["Accounts"]
    const accountId = ObjectId.createFromHexString(req.params.id);
    const account = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer
    };

    const response = await mongodb.getDatabase().db('project2').collection('accounts').replaceOne({ _id: accountId }, account);

    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags=["Accounts"]
    const accountId = ObjectId.createFromHexString(req.params.id);
    const account = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer
    };

    const response = await mongodb.getDatabase().db('project2').collection('accounts').deleteOne({ _id: accountId });

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