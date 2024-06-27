/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {
        message: 'Type in your URL',
        name:'URL'
    }
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    // console.log(url);
    var qr_svg = qr.image(url);
    fs.writeFile('URL.txt',url,(err=>{
      if(err) throw err;
      console.log('this file is saved');
    }))
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  //creating a text file to the save user input using the fs module to save user input
