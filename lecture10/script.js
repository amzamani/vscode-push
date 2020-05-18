let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let input = document.getElementById("inpSpeed")




let values = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]


function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationId;
let run = 1;
let root = document.documentElement;

function updateAnimation(newSpeed) {
    
    if (animationId)
    clearInterval(animationId)

    animationId = setInterval(() => {

        
        

        value1.innerText = getRandomValue()
        
        value2.innerText = getRandomValue()

        value3.innerText = getRandomValue()
       
       
    
    }, 1000 / newSpeed)
}

function shufflebtn(){
    let ev = input.value


        // document.documentElement => this is ":root" of css
        document.documentElement.style.setProperty('--speed', ev)
        run = 1;
        updateAnimation(ev)
    
   
}

function stopbtn(){
    run = 0;
    root.style.setProperty("--speed", 0)
    if(run==0){
        clearInterval(animationId)
        if((value1.innerText===value2.innerText)&&(value1.innerText===value3.innerText))
        {
            alert("U WIN")
            run = 0;
            root.style.setProperty("--speed", 0)
        }

    }
   
    

    
   
    
}


