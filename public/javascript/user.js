let users= [];
// adding user
function joinUser(socketID, userName, roomName) {
    const user = {
        socketID: socketID,
        username: userName,
        roomname: roomName
    }
    users.push(user)
    return user
}
// removing user
function removeUser(id){
    const getID = users => users.socketID === id;
    const index =  users.findIndex(getID);
	console.log(index)
	// console.log(getID.roomname)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

module.exports ={ joinUser, removeUser}