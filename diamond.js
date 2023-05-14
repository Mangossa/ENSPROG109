function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rhombus = "";
  rhombus += upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombus += upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombus += downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombus += downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  document.getElementById("textRhombus").innerHTML = rhombus;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight-1; i>=0; i--){
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
    // console.log(rLine);
  }
  return rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=0; i<pHeight; i++){
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
    // console.log(rLine);
  }
  return rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight-1; i>=0; i--){
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
    // console.log(rLine);
  }
  return rLine;
}
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight-1; i>=0; i--){
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
    // console.log(rLine);
  }
  return rLine;
}
