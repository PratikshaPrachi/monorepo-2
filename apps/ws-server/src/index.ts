import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port:3001
});

console.log("WebSocket server listening on ws://localhost:3001"); // <-- Add this line here

server.on("connection", async (socket) => {
   const res = await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    console.log(res);
    socket.send("Hi there you are connected to server");
})