$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const jsonData = {selectedAnswer : $("input[name='color']:checked").val()};


        if (jsonData["selectedAnswer"] === 'blue') {
            alert('Correct answer!');
        } else {
            alert('Wrong answer!');
        }
    });
});