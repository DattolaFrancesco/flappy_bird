const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;



//variabili pipes 1
let velocita = 5;
let x = canvas.width + 80;
let y1 = 0;
let size = 80;
let height1 = 0
let height2 = 0
let y2 = 0
let passati = true;

// variabili pipes 2
let height3 = 0
let height4 = 0
let y3 = 0
let x1 = canvas.width + 600;
let passati1 = true;

//variabili Bird
let xB = 50;
let yB = 0
let sizeB = 60
let heightB = 50
let yv = 0;
let jumpforce = 10;
let gravity = 0.5 ;


//funzione Bird

    function BirdMovement(){
        
        c.fillStyle = "yellow" 
        c.fillRect(xB,yB,sizeB,heightB)
            
            yv += gravity
            yB += yv

    }
// funzione saltoB

    document.addEventListener("keydown", (e) =>{
        if(e.key === " "){
             yv = -jumpforce
        }  
    })


// funzione per spostare i tubi

    function tubo1(){
    if(passati){
        height1 = Math.floor(Math.random() * (canvas.height -394))+50;
        height2 = canvas.height - height1 - 200;
        y2 = canvas.height - height2;
        passati = false;
    }
    if(x + size >= 0 ){
        x -= velocita;
       
    }
   
    if(x + size<= 0 ){
        passati=true;
        x = canvas.width-80;
    }
        c.fillRect(x,y1,size,height1);
        c.fillRect(x,y2,size,height2);
    }

    
    function tubo2(){
    if(passati1){
        height3 = Math.floor(Math.random() * (canvas.height -394))+50;
        height4 = canvas.height - height3 - 200;
        y3 = canvas.height - height4;
        passati1 = false;
    }
    if(x1 + size >= 0 ){
        x1 -= velocita;
       
    }
   
    if(x1 + size<= 0 ){
        passati1 =true;
        x1 = canvas.width-80;
    }
        c.fillRect(x1,y1,size,height3);
        c.fillRect(x1,y3,size,height4);
    }

    function loop(){
    

     c.clearRect(0, 0, canvas.width, canvas.height);
        BirdMovement()
        c.fillStyle = "green"
        tubo1();
        tubo2();
        requestAnimationFrame(loop);
    } 
    loop();



