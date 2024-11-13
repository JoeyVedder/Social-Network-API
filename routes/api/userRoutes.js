const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(async (req, res) => {
    try {
      await userController.getAllUsers(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      await userController.createUser(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.route('/:userId')
  .get(async (req, res) => {
    try {
      await userController.getUserById(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      await userController.updateUser(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await userController.deleteUser(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.route('/:userId/friends/:friendId')
  .post(async (req, res) => {
    try {
      await userController.addFriend(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await userController.removeFriend(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
