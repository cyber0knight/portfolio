// alert("working!");
var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        // alert("I got clicked");
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

// by using keywords.
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var ton1 =new Audio("sounds/tom-4.mp3");
            ton1.play();
            break;

        case "a":
            var ton1 =new Audio("sounds/tom-3.mp3");
            ton1.play();
            break;

        case "s":
            var ton1 =new Audio("sounds/tom-2.mp3");
            ton1.play();
            break;

        case "d":
            var ton1 =new Audio("sounds/tom-1.mp3");
            ton1.play();
            break;
        
        case "j":
            var ton1 =new Audio("sounds/snare.mp3");
            ton1.play();
            break;
        
        case "k":
            var ton1 =new Audio("sounds/crash.mp3");
            ton1.play();
            break;
        
        case "l":
            var ton1 =new Audio("sounds/kick-bass.mp3");
            ton1.play();
            break;
        
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function()
    {activeButton.classList.remove("pressed")},100);
}
// document.querySelectorAll(".drum")[0].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[1].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[2].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[3].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[4].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[5].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();
// })
// document.querySelectorAll(".drum")[6].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// })

