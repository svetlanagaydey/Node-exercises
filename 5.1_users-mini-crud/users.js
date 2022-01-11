//const fs = require('fs');

// const dataBuffer = fs.readFileSync('users.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name);
// data.planet = "Hello from enother planet";
// data.age = 22;

// const userJSON = JSON.stringify(data)
// fs.writeFileSync('users.json', userJSON);
const fs = require('fs');

const loadUsers = function () {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveUsers = function (users) {
    const dataJSON = JSON.stringify(users)
    fs.w
    riteFileSync('users.json', dataJSON)
}
function readUser(id) {
    const usersList = loadUsers();
    const currentUser = usersList.find((user) => {return user.id===id});
    console.log('You looking for: ' + currentUser.name)
}

function addUser(id, name, email) {
    const users = loadUsers()
    const duplicateUsers = users.filter(function (user) {
        return user.id === id
    })

    if (duplicateUsers.length === 0) {
        users.push({
            id: id,
            name: name,
            email: email
        })
        saveUsers(users)
        console.log('New user added!')
    } else {
        console.log('User exist!')
    }
}

function deleteUser(id) {
    const users = loadUsers();
    const updatedUsers = users.filter((user) => {
        return user.id !== id
    })
    saveUsers(updatedUsers);
    // const userToDelete = users.find((us) => {return us.id===id});
    // const index = users.indexOf(userToDelete);
    // if (index>=0) {
    //     users.splice(index, 1);
    //     const dataJSON = JSON.stringify(users)
    //     fs.writeFileSync('users.json', dataJSON)
    // } else {
    //     console.log("It is now user with id: " + id)
    // }
}
const updateUser = (argv) => {
    //const users = loadUsers()
    debugger
    return console.log('updated with new name ' + argv.newName )
}
module.exports = {
    addUser: addUser,
    deleteUser: deleteUser,
    readUser: readUser,
    updateUser: updateUser,
}