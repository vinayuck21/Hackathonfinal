const router = require("express").Router()
const Command = require("../models/Command")
bg = "white"
bgimg="0"

router.post("/command", (req,res) => {
    const {command} = req.body;
    
    

    if(command == "day")
    {
    const newCommand = new Command({command})
    bg = "white"
    console.log(bg)
    //newCommand.save()
   
    res.redirect("/")
   
    .catch((err) => console.log(err))
    }
    else if(command == "night")
    {
    const newCommand = new Command({command})
    bg = "black"
    console.log(bg)
    //newCommand.save()
    res.redirect("/")
    bgimg= "0"
    .catch((err) => console.log(err))
    }
    else if(command == "bgimg")
    {
    const newCommand = new Command({command})
    bgimg = "1"
    //newCommand.save()
    res.redirect("/")
    .catch((err) => console.log(err))
    }


    else
    {
        bg=command
        res.redirect("/")
    }
})

module.exports=router;