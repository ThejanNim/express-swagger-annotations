import express, { Express } from "express";
const HelloPackage = require("express-swagger-annotations");

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

class HelloClass {
  @HelloPackage()
  hello() {
    console.log("in hello method");
  }
}

const tt = new HelloClass();
tt.hello();

app.listen(5000, () => {
  console.log("Example app listening on port 3000!");
});
