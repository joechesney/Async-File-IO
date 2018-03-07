#!/usr/bin/env node

const fs = require('fs');
fs.readFile('./08.json', 'utf8', (error, data)=>{
  // console.log(data);
  process.stdout.write(data+"\n");
});