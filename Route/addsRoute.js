const express = require("express");
const router = express.Router();
const addsData = require("../Models/addsModel");


router.post("/postadds",async(req,res)=>{
    // console.log(req.body);
    const {title,emage,category,price,addStatus} = req.body;

    if(!title || !emage ||  !category || !price || !addStatus){
        res.status(422).json("plz fill the data");
    } else {
            const adds = new addsData({
                title,emage,category,price,addStatus
            });

           const newAdds = await adds.save();
            res.status(201).json(newAdds);
            console.log(newAdds);
        }

})
router.post(`/getAdss`, async (req, res) =>{
    const {addStatus} = req.query
    const ddsPresent = await addsData.find({addStatus:addStatus})
   
    if(!ddsPresent) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(ddsPresent);
    console.log(ddsPresent)
})
router.get("/ongoing", async(req, res) => {
  const ongoingData =  await addsData.find({addStatus:Ongoing})
  if(!ongoingData) {
    res.status(500).json({success: false})
} 
res.status(200).send(ongoingData);
console.log(ongoingData)
})

module.exports = router;