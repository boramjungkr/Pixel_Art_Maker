// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
  event.preventDefault();
	let height = $('#inputHeight').val();
	let width = $('#inputWidth').val();
	makeGrid(height, width);
});


function makeGrid(r, c) {
  // Your code goes here!
  $('tr').remove();
  let table = $('#pixelCanvas').val();
  for(var i=0; i<r; i++) {
  $('table').append('<tr id=row'+i+'></tr>');
    for(var j=0; j<c; j++) {
      $('#row'+i).append('<td></td>');
    }
  }
}


$('table').click(function(evt) {
	let color = $('#colorPicker').val();
  	$(evt.target).css('background-color', color);   
});
  