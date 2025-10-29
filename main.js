const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
const btn = document.querySelector(".button");
const h2 = document.querySelector(".h2");



// variabili generali
let margin = 1   ;
let running = true;
let velocita = 8;
let score = 0

//variabili pipes 1

let x = canvas.width + 80;
let y1 = 0;
let size = 180;
let height1 = 0
let height2 = 0
let y2 = 0
let passati = true;

// variabili pipes 2
let height3 = 0
let height4 = 0
let y3 = 0
let x1 = canvas.width + 1200;
let passati1 = true;

//variabili Bird
let xB = 150;
let yB = 0
let sizeB = 200
let heightB = 50
let yv = 0;
let jumpforce = 10;
let gravity = 0.5 ;

//funzione collisione

    function collisioneTubo1(){
        
        if(
            (    xB + sizeB - margin >= x && 
                 yB + heightB - margin >= y2 &&
                 xB + margin <= x + size) ||
            
            (    xB + sizeB - margin >= x && 
                 yB + margin <= height1 &&
                 xB + margin <= x + size)
        )
        return running = false;
    }
    function collisioneTubo2(){
        if(
            (xB + sizeB >= x1 && yB + heightB >= y3) ||
            (xB + sizeB >= x1 && yB <= height3)
        ) return running = false;
    }
//funzione score

    function punteggio(){
       h2.textContent = `Score : ${score} !`
    }

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
        height2 = canvas.height - height1 - 300;
        y2 = canvas.height - height2;
        passati = false;
    }
    if(x + size >= 0 ){
        x -= velocita;
       
    }
   
    if(x + size<= 0 ){
        passati=true;
        x = canvas.width-80;
        score ++;
    }
        c.fillRect(x,y1,size,height1);
        c.fillRect(x,y2,size,height2);
    }

    
    function tubo2(){
    if(passati1){
        height3 = Math.floor(Math.random() * (canvas.height -394))+50;
        height4 = canvas.height - height3 - 300;
        y3 = canvas.height - height4;
        passati1 = false;
    }
    if(x1 + size >= 0 ){
        x1 -= velocita;
       
    }
   
    if(x1 + size<= 0 ){
        passati1 =true;
        x1 = canvas.width-80;
        score ++;
    }
        c.fillRect(x1,y1,size,height3);
        c.fillRect(x1,y3,size,height4);
    }

    function loop(){
        if(!running){return}
        c.clearRect(0, 0, canvas.width, canvas.height);
        BirdMovement();   
        c.fillStyle = "green"
        tubo1();
        tubo2();
        collisioneTubo1();
        collisioneTubo2();
        punteggio();
        requestAnimationFrame(loop);
    } 
    loop();
    btn.addEventListener("click", () =>{location.reload();})



