function takeANumber (currentLine, customerName){
  console.log(currentLine.length)
  currentLine.push(customerName);

  return "Welcome, " + customerName + ". You are number " + ((currentLine.length)) + " in line.";
}