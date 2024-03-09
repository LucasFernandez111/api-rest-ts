import { Router,Response,Request } from "express"

const router = Router()




/**
 * http://localhost:3002/items [GET]
 */

router.get('/items', (req : Request ,res:Response) =>{
    res.json({
        data:'AQUI_VAN_LOS_MODELOS'
    })
})


console.log(Router());




export {router}