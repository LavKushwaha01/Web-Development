"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
// wss.on("connection", (socket:WebSocket) => {
//     User = User+1;
//     allsocket.push(socket)
//     console.log("user connected #" + User);
//     socket.on("message" , (message) => {
//         console.log("message received " + message.toString());
//         for(let i =0; i< allsocket.length; i++ ){
//              const user = allsocket[i];
//              user.send(message.toString() + " message from lav server")
//         }
//         socket.on("disconnect" , () =>{
//             allsocket = allsocket.filter(x => x != socket)
//         })
//             //  socket.send(message.toString() + " message from lav server")
//     })
// })
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            console.log("connected to room" + parsedMessage.roomId);
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type === "chat") {
            console.log("chat is established");
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room === currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
});
