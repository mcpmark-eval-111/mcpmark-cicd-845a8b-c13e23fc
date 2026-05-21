const unusedVariable = "This will trigger no-unused-vars error"

function greet(name) {
    const greeting = "Hello, " + name
    console.log(greeting)
    return greeting
}

const anotherUnused = "another one"

greet("World")
