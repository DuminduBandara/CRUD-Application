const express = require("express");
const User = require("../models/user");
const router = express.Router();

//create user
router.post("/createUser", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    mobile: req.body.mobile,
  });
  try {
    const newUser = await user.save();
    res.send("User create successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//view all user
router.get("/getallUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ users });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//delete user
router.delete("/deleteUser/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findByIdAndDelete({_id: userID});
    console.log(user);
    if (!user) return res.status(404).send("user not found");
    res.send("User deleted");
  } catch (error) {
    res.status(400).send("Deleting Error");
  }
});

//update user
// router.patch("/updateUser/:id", async (req, res) => {
//   let userId = req.params.id;
//   const { firstName, lastName, city, mobile } = req.body;

//   try {
//     const user = await User.findById({_id: req.params.id});
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (firstName) user.firstName = firstName;
//     if (lastName) user.lastName = lastName;
//     if (city) user.city = city;
//     if (mobile) user.mobile = mobile;

//     await user.save();
//     return res.json({ message: "User details updated successfully" });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return res.status(400).json({ message: "Update error" });
//   }
// });


router.put("/updateUser/:id", async (req, res) => {
  let userId = req.params.id;
  const { firstName, lastName, city, mobile } = req.body;

  const existingUser = await User.findOne({_id: userId});

  if (existingUser && existingUser._id != userId) {
    return res
      .status(409)
      .json({ message: 'Username or staffID already in use by another user' });
  }

  const updateUser = {
    firstName,
    lastName,
    city,
    mobile,
  };
  const update = await User.findOneAndUpdate({ _id: userId }, updateUser)
    .then(() => {
      res.status(200).send({ status: 'User Updated' });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

module.exports = router;
