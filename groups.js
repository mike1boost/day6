class Groups {
    constructor(){
        this.groups = [];
    }

    getGroups(){return this.groups}

    addGroup(group){
        if (this.unique_group(group.name))
            this.groups.push(group);
        else
            console.log("Group exist");
    }

    removeGroup(name){
        var groupId = this.groups.findIndex(function (group) {
            return  group.name === name;
        });
        if (groupId === -1) return false;
        this.groups.splice(groupId, 1);
        return true;
    }

    findGroup(name){
        var group = this.groups.filter(group => group.name == name);
        return group[0];
    }

    unique_group(name){
        if(this.findGroup(name) === undefined){
            return true;
        }
        return false;
    }

}


module.exports= Groups;