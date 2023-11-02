function dosomething(){
    console.log("*******doSomething called from newModule.js********");

}
function againdosomething(){
    console.log("*******again doSomething called from newModule.js********");
    
}
//CRUD-create,read,update and delete
let arr=[];
function createfun(element){
    arr.push(element)
    return arr;
}

function readfun(){
    return arr;
}

function updatefun(index,element){
    arr[index]=element;
    return arr;
}

function deletefun(index){
    arr.slice(index,1);
    return arr;
}

module.exports={dosomething,againdosomething,createfun,readfun,updatefun,deletefun};