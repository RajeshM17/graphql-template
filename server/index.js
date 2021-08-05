const express=require("express");
const app=express();
const PORT=6969;
const {graphqlHTTP}=require("express-graphql");
const cors=require("cors")
const schema=require("./Schemas/index")

//Quering :- receiving the data

//Mutation :- to update the data
app.use(cors())

//creating graphql server
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT,()=>{
    console.log("server started");
})