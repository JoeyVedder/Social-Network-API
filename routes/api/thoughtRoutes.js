const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.route('/')
  .get(async (req, res) => {
    try {
      await thoughtController.getAllThoughts(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    try {
      await thoughtController.createThought(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.route('/:thoughtId')
  .get(async (req, res) => {
    try {
      await thoughtController.getThoughtById(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      await thoughtController.updateThought(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      await thoughtController.deleteThought(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.route('/:thoughtId/reactions')
  .post(async (req, res) => {
    try {
      await thoughtController.addReaction(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.route('/:thoughtId/reactions/:reactionId')
  .delete(async (req, res) => {
    try {
      await thoughtController.removeReaction(req, res);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
