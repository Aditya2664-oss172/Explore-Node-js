//create the http server using node js

const http=require('http');

const {createfun,readfun,updatefun,deletefun}=require("./newModule");

const server=http.createServer(function(req,res){
    console.log(req.mathod,req.url);
    if(req.url =='/create' && req.method== 'POST'){
        res.write(JSON.stringify(createfun(10)))
    } else if(req.url == '/read' && req.method =='GET'){
        res.write(JSON.stringify(readfun()))
    } else if(req.url =='/update' && req.method =='PUT' ){
        res.write(JSON.stringify(updatefun(0,100)))
    } else if(req.url =='/delete' && req.method =='DELETE'){
        res.write(JSON.stringify(deletefun(0)))
    }

    /*if(req.url=="/"){
        res.write("request looks good");
    }   else if(req.url=='/pizza'){
        res.write('pizza is ready')
    }   else {
        res.write("not available");
    }*/
    res.end();

    //res.write("Request looks good");
    //res.end();

})

server.listen(5000,function(){
    console.log("serer running on port 5000!")

})