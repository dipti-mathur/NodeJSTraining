const EventEmitter = require('events');
const userObj = new EventEmitter();

userObj.addListener('userCreated',(user)=> {
    console.log('User create event',user);
});


userObj.addListener('userDeleted',()=> {
    console.log('User delete event');
});

userObj.emit('userCreated','ram');
userObj.emit('userCreated','shyam');

userObj.emit('userDeleted');