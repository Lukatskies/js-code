// Get element by ID "greetbutton", Event ('click')//
document.getElementById("greetbutton").addEventListener('click', function() { 

// Get the current hour - Object (new Date), Method (getHours)//
    const currentHour = new Date().getHours(); 
    
    // Greeting Variable//
    let greeting;

    // Greeting logic based on the current hour//
    if (currentHour < 12) {
        greeting = "Good morning!";
    } 
    else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } 
    else {
        greeting = "Good night!";
    }
    
    // Method//
    console.log(greeting);
});