// Import the WebSocketServer class from the "ws" library
import { WebSocketServer } from "ws";

// Create a new WebSocket server instance on port 8000
const wss = new WebSocketServer({ port: 8000 });

// Add an event listener for new client connections
wss.on("connection", function(socket: { on: (arg0: string, arg1: (e: any) => void) => void; send: (arg0: string) => void; }) {
    // Add an event listener for messages received from the connected client
    socket.on("message", (e) => {
        // Check if the message received is "ping"
        if (e.toString() === "ping") {
            // Respond with "pong" to the client
            socket.send("pong");
        }
    });
});
