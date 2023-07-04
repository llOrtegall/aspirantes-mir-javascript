import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertItem } from "../services/item";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
}

const getItems = (req: Request, res: Response) => {
  try {

  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS');
  }
}

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM');
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM', error);
  }
}

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM');
  }
}



export { getItem, getItems, postItem, deleteItem, updateItem };