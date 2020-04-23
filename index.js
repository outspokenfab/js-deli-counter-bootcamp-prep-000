function takeANumber (currentLine, customerName){
  console.log(currentLine.length)
  currentLine.push(customerName);

  return "Welcome, " + customerName + ". You are number " + ((currentLine.length)) + " in line.";
}

function nowServing (currentLine){
  if(currentLine.length < 0){
    console.log("Now Serving, " + currentLine[0]);
  } else{
    console.log("There is nobody waiting to be served!");
  }
}