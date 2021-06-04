let users = [];

const addUser = ({ id, name, room}) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    let existUser = users.find((user) => user.room === room && user.name === name);
    if (existUser){
        return{error: 'Sorry, but this user already exists'}
    };

    let user = {id, name, room};

    users.push(user);

    return {user}


};

const removeUser = (id) => {
    let index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }

};

const getUser = (id) =>users.find((user) => user.id === id);

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room); //??может быть неправильно

};

module.exports = {addUser, removeUser, getUser, getUsersInRoom};