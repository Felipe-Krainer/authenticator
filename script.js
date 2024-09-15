// Function to check login credentials
function checkLogin(userId, password) {
    // Define the correct credentials
    const correctUserId = 'admin';
    const correctPassword = 'secret';
    
    // Get the element where we will display messages
    const messageElement = document.querySelector('#message');
    
    // Check if the entered credentials match the correct ones
    if (userId === correctUserId && password === correctPassword) {
        console.log('Welcome admin!');
        messageElement.textContent = 'Welcome admin!';
    } else {
        console.log('BAD LOGIN CREDENTIALS');
        messageElement.textContent = 'BAD LOGIN CREDENTIALS';
    }
}

// Prompt the user for username and password
const userId = prompt('Enter your username:');
const password = prompt('Enter your password:');

// Call the function to check the login
checkLogin(userId, password);
