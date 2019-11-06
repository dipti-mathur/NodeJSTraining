const {User} = require('./user');

const userObj = new User();



userObj.addListener('userCreated',(user)=> {
    console.log('User create event',user);
});


userObj.addListener('userDeleted',(message)=> {
    console.log('User delete event with message', message);
});

userObj.create('Hari');
userObj.delete(10);

//userObj.emit('userCreated','ram');
//userObj.emit('userCreated','shyam');

//userObj.emit('userDeleted');