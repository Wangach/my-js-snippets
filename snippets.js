//get the current time
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  //  If you don't want to roll hours over, e.g. 24 to 00
  //  comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  /* return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`; */
  console.log(
  `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`
  );
}
const btn = document.getElementById('tme');
btn.addEventListener('click', () => {
let dte = new Date();
let now = dte.getTime();
convertMsToTime(now);
})

//Generate Random Key
let myLetters = ["a", "r", "s", "e", "n", "2", "4"];
for(i = 0; i < 5; i++){
let rNum = Math.floor(Math.random() * (myLetters.length - 1));
console.log(myLetters[rNum]);
}

//Mongoose connection to MongoDB
const mongoose = require("mongoose");
  
const connectDB = (URL) => {
    return mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
  
module.exports = connectDB;
//Check Before starting Up the server
const start = async () => {
    try {
        await connectDB("mongodb://localhost:27017/DEMO_DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.log(error);
        console.log("Failed to connect to the database, 
            server is not running.");
    }
};
  
start();
