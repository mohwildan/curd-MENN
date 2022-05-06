import express from "express";
import { deleteUser, editUser, getUser, getUserById, saveUser} from "./controler.js"

const router = express.Router()


router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.post('/users', saveUser)
router.patch('/users/:id', editUser)
router.delete('/users/:id', deleteUser)



export default  router