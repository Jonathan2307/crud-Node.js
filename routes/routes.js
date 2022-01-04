import express from "express";
import { catchErrors } from './../helpers.js'
import {
    getTest,
    postTest,
    addRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
} from "../controllers/roomController.js";

const router = express.Router()

router.get('/', (_, res) => {
    res.send('hello!!')
})

router.get('/test', getTest)

router.post('/test', postTest)
router.post('/room', catchErrors(addRoom))
router.get('/rooms', catchErrors(getRooms))

router.get('/room/:id', catchErrors(getRoom))
router.patch('/room/:id', catchErrors(updateRoom))
router.delete('/rooms/:id', catchErrors(deleteRoom))


export default router