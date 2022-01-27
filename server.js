const express=require('express')
const {logger}=require('./logger')
const app=express()

app.use(function(error,req,res,next){
    res.json({message:error.message})
})

app.listen(3000,()=>{
    logger.log('info','console on terminal')
    logger.info('express server is running on port 3000')
    logger.error('something went wrong')
    logger.warn('warn')
    logger.debug('debug')
    logger.verbose('verbose')
    logger.silly('silly')
})