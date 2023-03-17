const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    return res.status(404).json({ message: "Please provide all the Data" });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      res.status(404).json({ message: "User already exists" });
    } else {
      const adduser = new users({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      });

      await adduser.save();
      res.status(201).json(adduser);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

//get data

router.get("/getdata", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).send(error);
  }
});

//get individual data
router.get("/getuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const individualUser = await users.findById({ _id: id });

    res.status(200).json(individualUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

//update user

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

//delete user

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await users.findByIdAndDelete({ _id: id });

    res.status(201).json(deletedUser);
  } catch (error) {
    res.status(404).json(error);
  }
});
module.exports = router;
