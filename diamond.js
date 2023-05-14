function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var upLeft = createUpLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  var upRight = createUpRight(pHeight, pColorEven, pColorOdd, pSymbol);
  var downLeft = createDownLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  var downRight = createDownRight(pHeight, pColorEven, pColorOdd, pSymbol);

  var rhombus = `
    <div id="upLeft">${upLeft}</div>
    <div id="upRight">${upRight}</div>
    <div id="downLeft">${downLeft}</div>
    <div id="downRight">${downRight}</div>
  `;

  document.getElementById('textRhombus').innerHTML = rhombus;
}

function createUpLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = '';
  var spaces = pHeight - 1;
  var stars = 2;

  for (var i = 0; i < pHeight; i++) {
    rLine += '<p>';

    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    for (var k = 0; k < stars; k++) {
      if (k % 2) {
        rLine += '<span style="color: ' + pColorEven + ';">' + pSymbol + '</span>';
      } else {
        rLine += '<span style="color: ' + pColorOdd + ';">' + pSymbol + '</span>';
      }
    }

    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    rLine += '</p>';

    spaces--;
    stars += 2;
  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function createUpRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = '';
  var spaces = 0;
  var stars = pHeight * 2 - 1;

  for (var i = 0; i < pHeight; i++) {
    rLine += '<p>';

    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    for (var k = 0; k < stars; k++) {
      if (k % 2) {
        rLine += '<span style="color: ' + pColorEven + ';">' + pSymbol + '</span>';
      } else {
        rLine += '<span style="color: ' + pColorOdd + ';">' + pSymbol + '</span>';
      }
    }

    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    rLine += '</p>';

    spaces++;
    stars -= 2;
  }
  function createDownLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = '';
  var spaces = 0;
  var stars = pHeight * 2 - 1;

  // Create top half of diamond
  for (var i = 0; i < pHeight; i++) {
    rLine += '<p>';

    // Add spaces
    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    // Add stars
    for (var k = 0; k < stars; k++) {
      if (k % 2) {
        rLine += '<span style="color: ' + pColorEven + ';">' + pSymbol + '</span>';
      } else {
        rLine += '<span style="color: ' + pColorOdd + ';">' + pSymbol + '</span>';
      }
    }

    // Add spaces
    for (var j = 0; j < spaces; j++) {
      rLine += '<span>&nbsp;</span>';
    }

    rLine += '</p>';

    // Adjust spaces and stars for next row
    spaces++;
    stars -= 2;
  }

  document.getElementById("downLeft").innerHTML = rLine;
}
function createDownRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  var diamond = '';
  var spaces = 0;
  var stars = pHeight * 2 - 1;

  for (var i = 0; i < pHeight; i++) {
    diamond += '<p>';

    // Add spaces
    for (var j = 0; j < spaces; j++) {
      diamond += '<span>&nbsp;</span>';
    }

    // Add stars
    for (var k = 0; k < stars; k++) {
      if (k % 2) {
        diamond += '<span style="color: ' + pColorEven + ';">' + pSymbol + '</span>';
      } else {
        diamond += '<span style="color: ' + pColorOdd + ';">' + pSymbol + '</span>';
      }
    }

    diamond += '</p>';

    // Adjust spaces and stars for next row
    spaces++;
    stars -= 2;
  }

  document.getElementById('downRight').innerHTML = diamond;
}
  document.getElementById("upRight").innerHTML = rLine;
}
