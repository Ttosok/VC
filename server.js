const app = require("express")()
const http = require('http').createServer(app)
const io = require("socket.io")(http)
const {joinUser, removeUser} = require("./public/javascript/user")

app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/public/html/index.html")
})

let thisRoom = ""
// listen to connection event from client
/* io.on("connection", (socket) =>{
    console.log("connected")
    // listen to join room event
    socket.on("join room", (data) =>{
        // calling joinUser function from user.js
        let newUser = joinUser(socket.id, data.username, data.roomname)
        // calling event send data with sending data
        socket.emit("send data", {
            id: socket.id,
            username: newUser.username,
            roomname: newUser.roomname
        })
        thisRoom = newUser.roomname
        console.log(newUser)
        socket.join(newUser.roomname)
    })
    // listen to chat message event
    socket.on("chat message", (data) =>{
        io.to(thisRoom).emit("chat message", {
            data: data,
            id: socket.id
        })
    })
    // listen to disconnect event
    socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        console.log(user);
        if(user) {
            console.log(user.username + ' has left');
        }
        console.log("disconnected");
    });
})
 */
const PORT = process.env.PORT || 8000

http.listen(PORT, () => {console.log(`socket start at ${PORT}`)})