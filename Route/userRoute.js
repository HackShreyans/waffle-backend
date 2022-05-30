const express = require("express");
const router = express.Router();
const users = require("../Models/userModel");





router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,mobile,password} = req.body;

    if(!name || !email ||  !mobile || !password){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this user is already present");
        } else {
           
            const adduser = new users({
                name,email,mobile,password
            });

           const newUser = await adduser.save();
            res.status(201).json(newUser);
            console.log(newUser);
        }

    } catch (error) {
        res.status(422).json(error);
        console.log("error")
    }
})


// get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})
router.post("/login",async(req,res)=>{
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      const user = await users.find({ email: email });
      if (user.length > 0) {
        const isMatch = (password, user[0].password);
        // console.log(isMatch);
  
        if (isMatch === password) {
          return res.status(200).send(" welcome to the secret page");
        } else {
          return res.status(400).send("password not matched");
        }
      } else {
        return res.status(404).send("user does not exists");
      }
    } catch (error) {
      return res.status(500).send("something went wrong");
    }
}
)




module.exports = router;
