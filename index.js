var buttonsLength = document.querySelectorAll(".drum").length;
for(var i = 0 ; i<buttonsLength ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var inner=this.innerHTML;
makeSound(inner)
});    
}

document.addEventListener("keypress",function(event){
makeSound(event.key);    
});

function makeSound(inner){
var audio;
if(inner === 'l') audio = new Audio("sounds/crash.mp3");
else if(inner === 'a') audio = new Audio("sounds/kick-bass.mp3");
else if(inner === 's') audio = new Audio("sounds/snare.mp3");
else if(inner === 'd') audio = new Audio("sounds/tom-1.mp3");
else if(inner === 'j') audio = new Audio("sounds/tom-2.mp3");
else if(inner === 'k') audio = new Audio("sounds/tom-3.mp3");
else if(inner === 'w') audio = new Audio("sounds/tom-4.mp3");    
audio.play();
}