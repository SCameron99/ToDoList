import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let currentTab = "index";
let toDoList = [];

app.get("/", (req, res) => {
  currentTab = "index";
  res.render("index.ejs", {activeTab: currentTab});
  });

app.get("/features", (req, res) => {
  currentTab = "features";
  res.render("features.ejs", {activeTab: currentTab,
                              currentList: toDoList});
  });

app.post("/submit", (req, res) => {
  var toDoItem = req.body["todoItem"];
  toDoList.push(toDoItem);
  console.log(toDoList);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });