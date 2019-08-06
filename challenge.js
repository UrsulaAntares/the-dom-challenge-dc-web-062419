let number = document.querySelector('h1#counter')

function increment() {
    return number.innerText = parseInt(number.innerText) + 1
    }
    // increment()


function pause() { 
    pauseButton = document.getElementById("pause");
    timer =  setInterval(increment, 1000);
    pauseButton.addEventListener("click", function(){ 
        if (pauseButton.innerText=="pause") {
            clearInterval(timer);
            pauseButton.innerText="Resume";
            console.log("Clicked alright");
            return timer = 0
            };
        if (pauseButton.innerText=="Resume"){
            timer =  setInterval(increment, 1000);
            pauseButton.innerText="pause";
            console.log("Clicked to pause");
        }    
    })    
}

function downCount() {
    downButton = document.getElementById("-");
    downButton.addEventListener("click", function() {
        return number.innerText = parseInt(number.innerText) - 1
    })
}

function upCount() {
    upButton = document.getElementById("+");
    upButton.addEventListener("click", function() {
        return number.innerText = parseInt(number.innerText) + 1
    })
}

function heart(){
    heartButton = document.getElementById("<3");
    heartButton.addEventListener("click", function(){
        let p = document.createElement("p");
        let thisnum = number.innerText;
        let i=1;
        p.className = `like-for${thisnum}`
        if (document.getElementsByClassName(`like-for${thisnum}`)) {
            i += 1
            document.getElementsByClassName(`like-for${thisnum}`).innerText =`Liked ${thisnum} ${i} times`
        }
            p.innerText = `Liked ${thisnum} ${i} times`
            document.querySelector("ul.likes").append(p)
        
    })
}


heart()
downCount()
upCount()
pause()

