var a = document.querySelector("h5")
var add = document.querySelector("#add")

var check = 0

add.addEventListener("click", function () {
    if (check == 0) {
        a.innerHTML = "Friends"
        a.style.color = "green"
        add.innerHTML = "Remove Friend"
        
        console.log("hello kiara");
        check = 1
    } else {
        a.innerHTML = "Strainger"
        a.style.color = "rgb(229, 126, 0)"
        add.innerHTML = "Add Friend"
        
        

        console.log("chat hat");
        check = 0
    }
    
})

