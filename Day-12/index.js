let displayScreen = document.getElementById("displayScreen");
let btns = document.querySelectorAll(".btns");

// console.log(btns, displayScreen);
for (ele of btns) {
    ele.addEventListener('click', (e) => {
        
        btnText = e.target.innerText;
        
        if (btnText == "X") {
            btnText = "*"
        }
        displayScreen.value += btnText;
        
    })
}

function backspace(){
    displayScreen.value = displayScreen.value.substr(0, displayScreen.value.length - 1);
}

function fact() {
    var f, num,i
        f = 1;
    num = displayScreen.value

    for (var i = 1; i <= num; i++){
        f=f*i
    }
    i = i - 1;
}
// function display() {
//     console.log("first");
// }