import express from "express"

const app = express();

app.use(express.json())

let students = [
    {
    id:1,
    name:"jency"
},
{
    id:2,
    name:"heny"
},
{
    id:3,
    name:"kruti"
}

]


//check server 
app.get("/" ,(req,res) =>{
    res.send("hello from server")
})


//read 

app.get("/students" , (req,res) =>{

    if(students.length===0){
        return res.status(404).json("student data not found");
    }

    res.status(200).json({message:"student found" , students})

})

//read by id

app.get("/student/:id",(req,res) =>{

    const id = parseInt(req.params.id)

    const student = students.find((std) =>std.id === id )

    if(!student){
        return res.status(404).json("student not found with this id");
  }

 res.status(200).json({ message: "student found", student });


})


// add 

app.post("/students/add",(req,res))


const port = 5000;

app.listen(port,() =>{
    console.log(`server running on port${port}`)
});