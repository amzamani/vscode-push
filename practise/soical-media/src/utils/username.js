const ADJECTIVES = [
    'boundless',
    'brutal',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'long',
    
    
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 7)]
    const obj = OBJECTS[Math.floor(Math.random() * 7)]
    return `${adj}-${obj}`
}




module.exports = {
    genRandomUsername
}