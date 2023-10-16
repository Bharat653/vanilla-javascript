// const questions=[
// {
//     question : "what is color of sky",
//     answer : [
//         {text :"red",correct:false},
//         {text :"blue",correct:true},
//         {text :"yellow",correct:false},
//         {text :"purple",correct:false},
//     ]
// }];
// const questionelement = document.getElementById ("questions");
// const answer = document.getElementById("answer-buttons").childNodes;
// console.log(answer);

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