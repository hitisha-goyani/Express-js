import express from "express"

const app = express();

app.get("/",(req,res) =>{
    res.send("hello from server............")
});
const student =[
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
        if(students.length === 0)
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

