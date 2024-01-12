var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");
var arr = [inp1,inp2,inp3];
function userInput() {
    for(var i =0; i<arr.length; i++){
        console.log(arr[i].value);
    }
}

// ************Quiz**********************
function check() {
    var opt1 = document.getElementById("ans2");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="green";
    // opt1.parentElement.style.background ="rgb(159, 223, 159)";
    swal({
        title: "Congratulation!",
        text: "You click right answer :)",
        icon: "success",
        button: "OK",
      });
}
function check1() {
    var opt1 = document.getElementById("ans1");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="red";
    // opt1.parentElement.style.background ="red";
    swal({
        title: "Wrong Answer:(",
        text: "Please try again!",
        icon: "error",
        button: "OK",
      });
}
function check2() {
    var opt1 = document.getElementById("ans3");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="red";
    // opt1.parentElement.style.background ="red";
    swal({
        title: "Wrong Answer:(",
        text: "Please try again!",
        icon: "error",
        button: "OK",
      });
}

// **************************quiz 2*****************
function game() {
    var opt1 = document.getElementById("ans1");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="green";
    // opt1.parentElement.style.background ="rgb(159, 223, 159)";
    swal({
        title: "Congratulation!",
        text: "You click right answer :)",
        icon: "success",
        button: "OK",
      });
}
function game1() {
    var opt1 = document.getElementById("ans2");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="red";
    // opt1.parentElement.style.background ="red";
    swal({
        title: "Wrong Answer:(",
        text: "please try again!",
        icon: "error",
        button: "OK",
      });
}
function game2() {
    var opt1 = document.getElementById("ans3");
    var text = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color ="red";
    // opt1.parentElement.style.background ="red";
    swal({
        title: "Wrong Answer:(",
        text: "Please try again!",
        icon: "error",
        button: "OK",
      });
}
