import express from "express"

const app = express();

app.use(express.json());                                                

app.get("/",(req,res) =>{
    res.send("hello from server............")
});
const students =[
    {
        id:1,
        name:"hina"
    },
    {
        id:2,
        name:"mina"
    }
];

//const students = "";

//read

app.get("/student",(req,res) =>{
        if(students.length === 0){
            res.send("no student found")
        }
        res.json(students)
})

// read by id 

app.get("/student/:id",(req,res) =>{
    const id= parseInt(req.params.id)

    console.log("id",id);

    const student = students.find((std) => std.id === id );

    if(!student){
        res.json("id not found")    
        return;
    }

    res.json({message:"student data fonud " ,student})
})

const port = process.env.PORT || 5000;


app.listen(port,(err) =>{
    if(err){
        console.log(err);
        return
    }

    console.log(` server running on port ${port}`)
}
)

