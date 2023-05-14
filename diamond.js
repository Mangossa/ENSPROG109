function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine ="";
  var half = Math.floor((pHeight - 1) / 2);
  
  // Generate top half of the rhombus
  for (i=half; i>=0; i--){
    rLine += " ".repeat(i) + " ".repeat(half-i) + generateLine((2*i)+2, pColorEven, pColorOdd, pSymbol) + " ".repeat(half-i) + " ".repeat(i) + "<br>";
  }
  
  // Generate bottom half of the rhombus
  for (i=1; i<=half; i++){
    rLine += " ".repeat(i) + " ".repeat(half-i) + generateLine((2*i)+2, pColorEven, pColorOdd, pSymbol) + " ".repeat(half-i) + " ".repeat(i) + "<br>";
  }
  
  document.getElementById("textRhombus").innerHTML = rLine;
}

function generateLine(numSymbols, pColorEven, pColorOdd, pSymbol){
  var line = "";
  for (j=0; j<numSymbols; j++){
    // Is the position even or odd so we change the color
    if (j%2)
      // even
      line +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
      // odd
      line +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
  }
  return line;
}
