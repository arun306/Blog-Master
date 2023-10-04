const router = require("express").Router();

// importing required models of mongodb
const Category = require("../models/Category");


router.post("/",async (req,res)=> {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).send(savedCat);
    } catch (error) {
        res.status(500).json(error);
    }
});



router.get("/",async (req,res)=> {
    try {
        const Cats = await Category.find();
        res.status(200).send(Cats);
    } catch (error) {
        res.status(500).json(error);
    }
});




module.exports = router;