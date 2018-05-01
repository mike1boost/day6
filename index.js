const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const Groups = require('./groups');
const Group = require('./group');
const Users = require('./users');
const User = require('./user');

//init
var users = new Users();
var groups = new Groups();

//start function
rootMain();

function rootMain() {
    console.log(" ");
    console.log("root Main\n" +
        "Type 1 for users\n" +
        "Type 2 for Groups\n" +
        "Type 3 for adding/removing users from a group\n" +
        "Type any different key to exit chat");
    rl.question('Your command? ', answer => {
        switch (answer) {
            case '1':
                userMain();
                break;
            case '2':
                groupMain();
                break;
            case '3':
                user2groupMain();
                break;
            default:
                console.log("Exit chat good day");
                process.exit(0);
                break;
        }
    });
}


function userMain() {
    console.log(" ");
    console.log("user Main\n" +
        "Type 1 for create user\n" +
        "Type 2 for delete user\n" +
        "Type 3 print users\n" +
        "Type 4 update user details (age & password");
    rl.question('Your command? ', answer => {
        switch (answer) {
            case '1':
                addUser();
                break;
            case '2':
                deleteUser();
                break;
            case '3':
                getUsers();
                break;
            case '4':
                updateUser();
                break;
            default:
                console.log("You have typed wrong answer");
                rootMain();
                break;
        }
    });
}

function groupMain() {
    console.log(" ");
    console.log("user Main\n" +
        "Type 1 for create group\n" +
        "Type 2 for delete group\n" +
        "Type 3 print groups");
    rl.question('Your command? ', answer => {
        switch (answer) {
            case '1':
                addGroup();
                break;
            case '2':
                deleteGroup();
                break;
            case '3':
                getGroups();
                break;
            default:
                console.log("You have typed wrong answer");
                rootMain();
                break;
        }
    });
}

function user2groupMain() {
    console.log(" ");
    console.log("user2group Main\n" +
        "Type 1 for add user to group\n" +
        "Type 2 for remove user from group\n" +
        "Type 3 print user2group");
    rl.question('Your command? ', answer => {
        switch (answer) {
            case '1':
                adduser2group();
                break;
            case '2':
                delete_user_from_group();
                break;
            case '3':
                get_user2group();
                break;
            default:
                console.log("You have typed wrong answer");
                rootMain();
                break;
        }
    });
}


//////////////////////////  user2groupMain functions  ///////////////////////////////
function adduser2group() {
    rl.question('Enter user name: ', userName => {
        rl.question('Enter group name: ', groupName => {
            var user = users.find_user(userName);
            var group = groups.findGroup(groupName);
            if(user != undefined && group != undefined){
                group.addUser(user);
            }
            rootMain();
        });
    });
}

function delete_user_from_group() {
    rl.question('Enter user name (delete from group): ', userName => {
        rl.question('Enter group name: ', groupName => {
            var group = groups.findGroup(groupName);
            var users_ = group.getUsersClass();
            users_.remove_user(userName);
            rootMain();
        });
    });
}

function get_user2group() {
    var groups_ = groups.getGroups();
    groups_.forEach(function(group) {
        var users = group.getUsersArray();
        console.log('group name: ' + group.getName());
        users.forEach(function(user){
            console.log("\t" + "name:" + user.get_name() +
                " age:" + user.get_age() +
                " password:" + user.get_password());
        });
    });
    rootMain();
}




//////////////////////////  group functions  ///////////////////////////////
function addGroup() {
    rl.question('Enter group name: ', name => {
        groups.addGroup(new Group(name, new Users()));
        rootMain();
    });
}

function deleteGroup() {
    rl.question('Enter name(group to delete): ', name => {
        groups.removeGroup(name);
        rootMain();
    });
}

function getGroups() {
    console.log(groups.getGroups());
    rootMain();
}

//////////////////////////  user functions  ///////////////////////////////
function addUser() {
    rl.question('Enter user name: ', name => {
        rl.question('Enter age: ', age => {
            rl.question('Enter password: ', password => {
                users.add_user( new User(name, age, password));
                rootMain();
            });
        });
    });
}

function deleteUser() {
    rl.question('Enter user name(user to delete): ', name => {
        users.remove_user(name);
        groups.getGroups().forEach(function(group) {
            group.getUsersClass().remove_user(name);
        });
        rootMain();
    });
}

function getUsers() {
    console.log(users.get_users());
    rootMain();
}

function updateUser(){
    rl.question('Enter user name you want to update: ', name => {
        rl.question('Enter new age: ', age => {
            rl.question('Enter new password: ', password => {
                var user = users.find_user(name);
                user.set_age(age);
                user.set_password(password);
                rootMain();
            });
        });
    });
}




