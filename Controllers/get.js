const test=async(req,res)=>{
    try{
        res.send('Try running')
    }
    catch{
        res.send('Found Error')
    }
}

module.exports = {
    test,
}