function createGreeter(greeting) {

    function greet(name) {
        // here we treat as if name is function
        console.log(greeting, name)
        function g(midname)
        {
            console.log(midname)
        }

        return g
        
    }

    return greet
}

function getName() {
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')
let h1 = g1("Abu")
h1("sir");




console.log(g1('Arnav'))
h1("mentor")
console.log(g1('Prateek'))
h1("mentor2")
console.log(g2('Arnav'))
console.log(g2('Prateek'))