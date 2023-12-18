const stumodel = require("../models/stumodel")

const insertdata=(req, res)=>{

    const mydata = new stumodel(req.body);
    mydata.save().then(()=>{console.log("data successfully Inserted")})
}
const datadisplay=(req, res)=>{

    stumodel.find().then((data)=>res.send(data))
}

const datadelete =(req, res)=>{
    stumodel.findByIdAndDelete(req.params.id).then((data)=>res.send(data));
}

const datasearch=(req, res)=>{

    stumodel.find(req.body).then((data)=>{res.send(data)});
}

const dataedit=(req, res)=>{
    stumodel.findById(req.params.id).then((data)=>{res.send(data)});
}

const editandupdate=(req, res)=>{
    stumodel.findByIdAndUpdate(req.params.id, req.body).then((data)=>{res.send(data)});
}

module.exports={
    insertdata,
    datadisplay,
    datadelete,
    datasearch,
    dataedit,
    editandupdate
}