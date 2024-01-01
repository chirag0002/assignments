/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
port = 3000;

app.get('/:foldername', function (req, res){
  const foldername = req.params.foldername;
  const folderPath = path.join(__dirname, foldername);
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send('Route not found');
      return;
    }
    console.log(files);
    res.json(files);
  });
})

app.get('/:foldername/:filename', function (req, res){
  let foldername = req.params.foldername;
  let filename = req.params.filename;
  filename = filename +'.txt';

  const filePath = path.join(__dirname, foldername, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('File not found');
      return;
    }
    data = data.toString();
    res.json(data);
  });
})


app.all('*', function(req, res){
  res.status(404).send('Route not found');
})

app.listen(port, function(){
    console.log(`Server is running on ${port}`);
});


module.exports = app;