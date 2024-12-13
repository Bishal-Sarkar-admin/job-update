import { setKeyboardDelay, typeString, keyTap } from "robotjs";

// Time delay for RobotJS (milliseconds)
setKeyboardDelay(500);

// Function to send a message
function sendMessage(message) {
  typeString(message); // Type the message
  keyTap("enter"); // Press "Enter" to send
}

// Function to monitor new messages
function monitorChats() {
  console.log("Monitoring chats...");

  // Simulate monitoring (in practice, you'd integrate message tracking logic)
  setInterval(() => {
    // Example: Trigger auto-reply for every interval
    sendMessage("This is an automated reply. I will get back to you soon!");
  }, 10000); // Check every 10 seconds
}

// Start monitoring
monitorChats();
