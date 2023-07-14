require("dotenv").config();
const mongoose=require("mongoose");
const mongoURI=process.env.MONGO_URI;
const mongoDB=async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result) =>{
        if (err){
            console.log("---",err);
        }
        else{
            console.log("Connected");
            const fetched_data=mongoose.connection.db.collection("food-items");
                fetched_data.find({}).toArray(async function(err,data){
                    const foodCategory=mongoose.connection.db.collection("foodCategory");
                    foodCategory.find({}).toArray(async function(err,catData){
                        if (err){
                            console.log(err);
                        }
                        else{
                            global.food_items=data;
                            global.foodCategory=catData;
                        }
                    });
                });
        }
    });
}

module.exports=mongoDB; 