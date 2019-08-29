const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//    Models
const User = require('../models/User');
const Post = require('../models/Post');


//   Routes
//   CRUD (Create, Read, Update, Delete)


//    METHODS (CREATE)
router.post('/addUser', async (req, res) => {
    //   Create a new User
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    try{
        //   Add User to DB
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err){
        res.json(err);
    }

});


router.post('/addPost/:user', async (req, res) => {
  
      try {
      
        const post = {
            title: req.body.title,
            description: req.body.description
        }

        const user = await User.findById(req.params.user);
        user.posts.push(post);

        await user.save();

        res.json(user);
      } 

      
      catch (err) {
        console.error(err);
      }

});
  


//   GET METHODS (READ)
router.get('/', async (req, res) => {
    try{
        //   Fetch All Users
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.json(err);
    }
});


router.get('/:id', async (req, res) => {
    try{
        //   Fetch Specific User
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch(err){
        res.json(err);
    }
});



//   UPDATE METHODS(UPDATE)
mongoose.set('useFindAndModify', false);
router.put('/updateUser/:id', async (req, res) => {
    try{
        //   Update Post
        const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, {$set: {email: req.body.email, password: req.body.password}});
        res.json(updatedUser);
    }
    catch(err){
        res.json(err);
    }
});




//   DELETE METHODS(DELETE)
router.delete('/deleteUser/:id', async (req, res) => {
    try{
        //   Delete Post
        const removedUser = await User.deleteOne({_id: req.params.id});
        res.json(removedUser);
    }
    catch(err){
        res.json(err);
    }
});


module.exports = router;
