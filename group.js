const Users = require('./users');

class Group {
    constructor(name, users){
        this.name = name || null;
        this.users = users;
    }

    getName(){return this.name}

    getUsersArray(){return this.users.get_users()}
    getUsersClass(){return this.users}

    addUser(user){
        // validate

        // exec
        this.users.add_user(user);
    }

    findUser(name){
        // var user = this.users.filter(user => user.name == name);
        // return user[0];
        return this.users.find_user()
    }

}


module.exports= Group;

