
const router = require('express').Router();

const User = require("../models/User");
const bcrypt = require('bcrypt');




// Register
// thats is this code is executed at url "/api/auth/register"

router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        // const newUser = new User(req.body);
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashPass,
        });

        const user = await newUser.save();
        // console.log(user)
        res.status(200).json(user);
    }catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;


// Login
//   "api/auth/login"


router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username : req.body.username});
        // !user && res.status(500).json("Wrong Credentials!");

        if(!user) {
            res.status(400).json("Wrong Credentials!");
            return;
        }
        
        // compare stored hash with password from login form using compare method of bcrypt
        const validated = await bcrypt.compare(req.body.password, user.password);
        // !validated && res.status(500).json("Wrong Password!");
        if(!validated) {
            res.status(400).json({error :"Wrong Password"});
            return;
        }

        const {password,...others} = user._doc;
        res.status(200).json(others);
    }catch(err) {
        res.status(500).json(err);
    }
})
