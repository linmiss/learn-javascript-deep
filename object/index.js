/**
 * 优化if else
 */

if (color) {
  if (color === 'black') {
    printBlackBackground();
  } else if (color === 'red') {
    printRedBackground();
  } else if (color === 'blue') {
    printBlueBackground();
  } else if (color === 'green') {
    printGreenBackground();
  } else {
    printYellowBackground();
  }
}

//改进后

let colorObj = {
  'black': printBlackBackground,
  'red': printRedBackground,
  'blue': printBlueBackground,
  'green': printGreenBackground,
  'yellow': printYellowBackground
}

if (color in colorObj) {
  colorObj[color]();
}