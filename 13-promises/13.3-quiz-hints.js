const { resolve } = require("path");

//What will be logged?
function one(){
  let fortune = null;
  
  if (!fortune) {
    setTimeout(() => {
      fortune = "A pleasant surprise is waiting for you.";
    });
  }
  
  console.log(`Your fortune is: ${fortune}`);
}


//What will be the state of the promise below after 1,000 milliseconds?
function two(){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Completed!');
    }, 100);
  });
}


//What will be the state of the promise below after 1,000 milliseconds?
function three(){
  const promise = new Promise((resolve, reject) => {
    resolve('Completed!');
    // reject([3,6,9])
  });

  // promise
  // .then((resolvedData)=>{
  //   console.log(resolvedData)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  
}

three()