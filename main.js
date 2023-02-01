function line(){
    let lines = 170;
    let body = document.querySelector('body');
    let i = 0;
    while(i < lines){
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width = 0.2 + size+'px';
        drop.style.left = posX + 'px'; 
        drop.style.animationDelay = delay + 's'; 
        drop.style.animationDuration = 1 + duration + 's'; 
        body.appendChild(drop);
        i++
    }
}
line()