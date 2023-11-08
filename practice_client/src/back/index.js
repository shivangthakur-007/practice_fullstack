import fs from 'fs';
import os from 'os';
import express from "express";

const app = express();

const PORT = 3090;
app.use("/s", (req, res) => {
  res.send("hello world");
});

app.all("*", (req, res) => {
  res.send("not a correct path");
});
app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, (req, res) => {
  const from = req.params[0];
  const to = req.params[1] || "HEAD";
  res.send(`commit range ${from}..${to}`);
});

app.listen(PORT, () => {
  console.log(`the Port is running on ${PORT}`);
});

export default app;

let data = "Node.js is a platform  that utilize Javascript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The Platform is constructed using google chrome's v8 Javascript engine. A web application  is a type  of software that executed on a server and is displayed by a client's browser that obtains  all the application's resources over the internet."

fs.writeFile('message.txt', data, (err) => {
if (err) throw err;
console.log('The file has been saved!');
})

let data1= 'Compared to other server-side languages, Node.js is a backend language that is focused on scalable architectures. lorem30 '
fs.appendFile('message.txt', data1, (err)=>{
  if (err) throw err;
  console.log('The file has been appended!');
})

fs.readFile('message.txt', (err, data)=>{
  if (err) throw err;
  console.log(data.toString());
})

fs.unlink('message.txt', (err)=>{
if (err) throw err;
  console.log('Data has been removed successfully')
})

console.log(os.platform());
