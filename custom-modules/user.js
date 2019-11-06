let name = 'Hari';
let email = 'hari@abc.com'



 function showUser(){
    console.log('name:',name);
    console.log('mail:',email);
}

class User {

    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    show()
    {
        console.log('inside class name:',this.name);
        console.log('inside class mail:',this.email);
    }
}

module.exports = {
    name,
    email,
    showUser,
    User
};



