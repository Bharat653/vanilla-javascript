// for loop//
$(document).ready(function () {
  $('#for').click(function () {
    for (let i = 0; i <= 6; i++) {
      $('#answer').append(i);
    }
  });
});

$('#while').ready(function () {
  $('#while').click(function () {
    let i = 0;
    while (i <= 5) {
      $('#answer').append(i);
      i++;
    }
  });
});
$('#dowhile').ready(function (){
    $('#dowhile').click(function (){
        let i=0;
        do{
            $("#answer").append(i);
            i++;
        }
        while(i<=20);
    });
});
