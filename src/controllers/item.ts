import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItems = (req:Request, res: Response) =>{
    try {
        
    } catch (err) {
    handleHttp(res,'ERROR_GET_ITEMS')
    }

}

const getItem = (req:Request, res: Response) =>{
try {
    
} catch (err) {
    handleHttp(res,'ERROR_GET_ITEM')
}
}

const updateItem  = (req:Request, res: Response) =>{
try {
    
} catch (err) {
    handleHttp(res,'ERROR_UPDATE_ITEM')
}
}

const postItem = (req:Request, res: Response) =>{
try {
    
} catch (err) {
    handleHttp(res,'ERROR_POST_ITEM')
}
}

const deleteItem = (req:Request, res: Response) =>{
try {
    
} catch (err) {
   handleHttp(res,'ERROR_DELETE_ITEM') 
}
}


export {getItem,getItems,updateItem,postItem,deleteItem}












