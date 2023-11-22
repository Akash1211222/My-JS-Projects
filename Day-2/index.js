var con= document.querySelector("#container")
var love = document.querySelector("i")
var like = document.querySelector("h5")


con.addEventListener("dblclick", function () {
    love.style.transform = 'translate(-50%, -50%) scale(1.5)';
    love.style.opacity = 0.8;
    


    setTimeout(function () {
        love.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 2000);
})

