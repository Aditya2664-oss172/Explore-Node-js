const EventEmitter=require('events');

const shoutEvent=new EventEmitter();  
shoutEvent.on('echopoint',function(data){          //.on event listen kregra
    console.log("custom event received :",data);
})

shoutEvent.emit('echopoint',
     {message: 'Shouting name on echo point'}

)

