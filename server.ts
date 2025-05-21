import express from 'express'
import { employeeRouter } from './employee_router'
import { loggerMiddleware, processTimeMiddleware } from "./loggerMiddleware";

const server = express()

server.use(express.json())
server.use(loggerMiddleware)
server.use(processTimeMiddleware)

server.listen(3001, () => {
    console.log("Server listening")
})

server.get('/', (req, res) => {
    console.log(`Request Url : ${req.url} `)
    res.status(200).send("Hello from server")
})

server.use('/employees', employeeRouter)

