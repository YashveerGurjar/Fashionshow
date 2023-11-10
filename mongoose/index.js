const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require("nodemailer");
const cors=require('cors');
const userFile = require('./Routes/User');
const authFile = require('./Routes/Auth');
const productFile = require('./Routes/Product');
const stripeFile = require('./Routes/Stripe')
const mymail="yash.gurjar@deeporion.com"
const pass="kodi rlsi mpuh vzgt" 

app.use(cors());
app.use(express.json());
app.use('/api/User', userFile);
app.use('/api/Auth', authFile);
app.use('/api/product', productFile);
app.use('/api/Stripe', stripeFile);

app.post("/api/Mail",async(req,res)=>{
    const username="admin";
    const usermail=req.body.inputdata
    console.log(usermail);
    const transporter = nodemailer.createTransport({
        service:"gmail",
        port: 587,
        
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: mymail,
          pass: pass,
        },
      });
      const info = await transporter.sendMail({
        from: '"Fashion Store" <yash.gurjar@deeporion.com>', // sender address
        to: usermail, // list of receivers
        subject: "Latest Update", // Subject line
       
        html: `<b> Hello ${username} thanks for the visit </b>`, // html body
      });
            
      console.log("Message sent: %s", info.messageId);
      res.status(200).json(info);


})


mongoose.connect(process.env.ConUrl)
    .then(() => console.log("connection Successful"))
    .catch((err) => console.log(err));

    app.get("/", async(req, resp) => {
        resp.send("app is working fine");
    })

app.listen(5000, () => {
    console.log("server is working")
});























// const express = require('express');
// const mongoose = require('mongoose');
// const url = 'mongodb+srv://admin:admin1234@cluster0.izehvtc.mongodb.net/Ecom?retryWrites=true&w=majority';

// mongoose.connect(url);

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// });

// const main = async () => {
//     const productModel = mongoose.model('products', productSchema);
//     let data = await productModel.insertMany([
//         {
//             name: "I phone 21",
//             price: 1000
//         },
//         {
//             name: "I phone 22",
//             price: 1000
//         }

//     ]);
//     let result =await data.save();
//     console.log(data);

// }

// // main();

// const updatedb = async () => {

//     let productModel = mongoose.model('products', productSchema);
//     let data = await productModel.updateOne(
//         {name: "I phone 21" },
//         {
//             $set: { price: 700 }
//         }

//     )
//     console.log(data);
// }

// // updatedb();


// const finddb = async () => {

//     let productModel = mongoose.model('products', productSchema);
//     let data = await productModel.find()
//     console.log(data);
// }

// finddb();


