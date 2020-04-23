function takeANumber (currentLine, customerName){
  console.log(currentLine.length)
  currentLine.push(customerName);

  return "Welcome, " + customerName + ". You are number " + ((currentLine.length)) + " in line.";
}

function nowServing (currentLine){
  if(currentLine.lenght < 0){
    console.log("Now Serving, " + currentLine[0]);
  } else (){
    console.log()
  }
}