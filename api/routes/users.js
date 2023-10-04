// in this we will be able to delete or update user

const router = require("express").Router();
const bcrypt = require("bcrypt");

// importing required models of mongodb
const User = require("../models/User");
const Post = require("../models/Post");

// UPDATE
// id -> userID in mongodb
router.put("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      // deleting user also should delete his post so we are finding the user

      const user = await User.findById(req.params.id);

      if (!user) {
        res.status(404).json("User not found");
      }

      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted ...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (error) {
      res.status(404).json("User not found");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

// GET USER

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user) {
      res.status(404).json("User not found");
      return;
    }
    const {password , ...others} = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
