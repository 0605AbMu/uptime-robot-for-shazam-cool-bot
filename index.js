
const axios  = require("axios").default
const fs = require("fs");
setInterval(() => {
    axios("https://munir-usta-admin.glitch.me/", {method:"get"})
.then(res=>{
    fs.appendFileSync("./data/log.txt",res.data+" Date: "+new Date()+"\n" )
})
.catch(e=>{
    fs.appendFileSync("./data/log.txt",("Error has Occured "+" Date: "+new Date())+"\n")
})
}, 330000 );

