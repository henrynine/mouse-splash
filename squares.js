rainbowColors = ['red', 'orange', 'yellow', 'lime', 'blue', 'indigo']
rainbowCounter = 0

$(document).ready(function() {

  makeGrid(50, 50);

  $('#make').click(function() {
    var s = prompt("How many squares across?");
    console.log('hi');
    makeGrid(s, s);
  });

});

function makeGrid(h, w) {
  $('.row').remove();
  var height = h;
  var width = w;
  var square_height = 960/height;
  var square_width = 960/width;
  var row = '<div class="row"></div>';
  var square = '<div class="square"></div>';
  var drawing = true;

  divs = [];
  for (var i = 0; i < height; i++) {
    $('#wrapper').append(row);
  }
  for (var j = 0; j < width; j++) {
    $('.row').append(square);
  }

  $('.square').css('width', square_width);
  $('.square').css('height', square_height);

  $('#clear').click(function() {
    $('.square').css('background-color', 'white');
    drawing = true;
  });

  $('.square').mouseenter(function() {
    console.log('yes');
    if (drawing==true) {
      colorRainbow($(this));
      console.log('yes');
    }
  });

  $(document).click(function() {
    drawing = !drawing;
  });

}

function colorBlack(element) {
  element.css('background-color', 'black')
}

function colorRandomRainbow(element) {
  element.css('background-color', rainbowColors[Math.floor(Math.random() * rainbowColors.length)])
}

function colorRainbow(element) {
  element.css('background-color', rainbowColors[rainbowCounter % rainbowColors.length])
  rainbowCounter++;
}
