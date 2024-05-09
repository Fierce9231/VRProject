var scene;

function start(){
    scene = $('a-scene')[0];
    console.log('Scene started');


}

AFRAME.registerComponent("start-game", {
    init: start 
// Calls the function    


})