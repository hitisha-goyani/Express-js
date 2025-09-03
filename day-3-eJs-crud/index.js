import express from "express"
import path from "path"

import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")



app.use(express.json())

app.use(express.urlencoded({ extended: true }))

let students = [
    { id: 1, name: "neha" },
    { id: 2, name: "mina" }
]


app.get("/", (req, res) => {
    res.render("index", { students })
})

//add

app.get("/add", (req, res) => {
    res.render("add");
})

app.post("/add", (req, res) => {
    const { name } = req.body;

    const newData = {
        id: students.length + 1,
        name
    }

    students.push(newData)
    res.redirect("/")
});

//edit

app.get("/edit/:id", (req, res) => {


    const id = parseInt(req.params.id)

    const student = students.find((s) => s.id === id)

    if (!student) {

        res.status(404).json("student not found")
    }
    res.render("edit", { student })
})

app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const student = students.find((s) => s.id == id)

    const { name } = req.body

    student.name = name

    res.redirect("/")

})

//delete

app.get("/delete/:id" , (req,res) =>{

    const id = parseInt(req.params.id)

    students = students.filter((s) =>s.id == id)

    res.redirect("/")

})


const port = 5000;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})