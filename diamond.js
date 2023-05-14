function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var up = generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol, "up");
  var down = generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol, "down");
  
  var rhombus = up + down;
  
  document.getElementById("textRhombus").innerHTML = rhombus;
}

function generateRhombus(pHeight, pColorEven, pColorOdd, pSymbol, direction){
  var rLine ="";
  var start = 0;
  var end = pHeight;
  var increment = 1;
  
  if(direction === "down"){
    start = pHeight-1;
    end = -1;
    increment = -1;
  }
  
  for (i=start; i!==end; i+=increment){
    rLine +="<p>";
    // Create each line on the Rhombus
    for(j=0; j<=i; j++){
      // Is the position even or odd so we change the color
      if (j%2)
        // even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        // odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    rLine +="</p>";
  }
  
  return rLine;
}
