function toggleMenu() {
    document.querySelector(".menucontainermobile").classList.toggle("active");
}

window.onload = function() {
    alert("Welcome to JavaScript!");
    let name = prompt("What is your name?");
    if (!name) {
        name = "Guest"; 
    }
    let likesJavaScript = confirm("Do you like JavaScript?");
    let message = likesJavaScript 
        ? `Hello, ${name}! Glad you like JavaScript!` 
        : `Hello, ${name}! Hope you learn to enjoy it!`;
    let output = document.getElementById("output");
    if (!output) {
        output = document.createElement("p");
        output.id = "output";
        output.style.textAlign = "center";
        output.style.fontSize = "20px";
        document.body.prepend(output);
    }
    output.innerText = message;
};
