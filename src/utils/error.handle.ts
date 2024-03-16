import { Response } from "express";

const handleHttp = (res:Response,error:string,errorRaw?:any ):void =>{
    console.info(errorRaw)

    res.status(500).send({error})

}

export {handleHttp}