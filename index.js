var buttons = document.querySelectorAll(".drum").length;

for (var item = 0; item < buttons; item++){
    document.querySelectorAll(".drum")[item].addEventListener("click", function(){

     var buttonHtml = this.innerHTML;  
     makeSound(buttonHtml); 
     buttonAnimition(buttonHtml); 
    }); 
    
    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimition(event.key);
    });

    function makeSound(key){
        switch(key){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;  
                
            case "a":
                var tom_2 = new Audio("sounds/tom-2.mp3");
                tom_2.play();
                break;  
                
            case "s":
                var tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play();
                break; 

            case "d":
                 var tom_4 = new Audio("sounds/tom-4.mp3");
                 tom_4.play();
                break;

            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;     

            case "k":
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;
                
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                
                
            default: console.log(buttonHtml);    


        }

        
    }
    function buttonAnimition(currentKey){
        var currentButton = document.querySelector("." + currentKey);
        currentButton.classList.add("pressed");

        setTimeout(function(){
            currentButton.classList.remove("pressed");
        },200);
    }

    
}

