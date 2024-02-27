const fs = require("fs");
const express = require("express");

const app = express();
console.log(__dirname); 
// ..\AdaLovelaceAkademi\DevOpsAkademi\DevOps-Akademi-Projects\week1\file-app

// read json file from local file system
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);
// console.log("data", data); 
// console.log(dataObj); 
// { name: 'Seher', surname: 'Seher', age: 25, grades: { midterm: 90, final: 100 } }

// write json file to local file system
dataObj.name = "Ahmet";
dataObj.age = 28;

// console.log(dataObj);

// yeni datayı json haline getirip mecvut değeri değiştirerek dosyaya kaydetme
const newdata = JSON.stringify(dataObj);
fs.writeFileSync(`${__dirname}/data.json`, newdata);

app.get("/student", (req, res) => {
    res.status(200).json({
        status: "success",
        data: dataObj,
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
