function takeANumber (currentLine, customerName){
  console.log(currentLine.length)
  currentLine.push(customerName);

  return "Welcome, " + customerName + ". You are number " + ((currentLine.length)) + " in line.";
}

function nowServing (currentLine){
  if(currentLine.length > 0){
    var announcement = "Currently serving " + currentLine[0] + ".";
  } else{
    announcement = "There is nobody waiting to be served!";
  }
  currentLine.shift();
  return announcement;
}

function nowServing (currentLine){
  do {
  if(currentLine.length > 0){
    return "Currently serving " + currentLine[0] + ".";
  } else{
    return "There is nobody waiting to be served!";
  }
}