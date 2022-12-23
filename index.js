
for (let z = 0; z < document.querySelectorAll('.drum').length ; z++) {
    document.querySelectorAll('.drum')[z].addEventListener('click',function(){

        let sounplay = this.innerHTML ;
       music(sounplay);
       animation(sounplay);
      
    });
    
}


document.addEventListener('keypress',function(event){
    let keytab = event.key ;
    music(keytab);
    animation(keytab);

    
})


function music(playes){
    switch(playes){
        case 'w':
        let sound = new Audio('sounds/tom-1.mp3');
        sound.play();
        break  ;
        case 'a':
        let sound1 = new Audio('sounds/tom-2.mp3');
        sound1.play();
        break ;
        case 's':
        let sound3 = new Audio('sounds/tom-3.mp3');
        sound3.play();
        break ;  
        case 'd':
        let sound4 = new Audio('sounds/tom-4.mp3');
        sound4.play();
        break ;   
        case 'j':
        let sound5 = new Audio('sounds/snare.mp3');
        sound5.play();
        break ; 
        case 'k':
        let sound6 = new Audio('sounds/crash.mp3');
        sound6.play();
        break ;   
        case 'l':
        let sound7 = new Audio('sounds/kick-bass.mp3');
        sound7.play();
        break ;  
        
        default :
          console.log('new key press')
         
    }

}

function animation(classname){
 let k = document.querySelector('.' + classname);
 k.classList.add('pressed');
 setTimeout(function(){
    k.classList.remove('pressed');
 }, 140 )


}