import express from "express";
import employeeRouter from "./routes/employee.router";
import loggerMiddleware from "./middleware/logger.middleware";
import datasource from "./db/data-source";
import { errorMiddleware } from "./middleware/error.middleware";
import authRouter from "./routes/auth.router";
import { authMiddleware } from "./middleware/auth.middleware";
import { LoggerService } from "./services/logger.services";
import departmentRouter from "./routes/department.router";

const { Client } = require('pg');
const server = express();
const logger = LoggerService.getInstance('server()')

server.use(express.json());
server.use(loggerMiddleware);
server.use("/employee", authMiddleware, employeeRouter); //always check if user is logged in
server.use("/auth", authRouter) 
server.use("/department", authMiddleware, departmentRouter)

server.use(errorMiddleware) // we need this to happen after routers have been called
//ie, the error from employeeRouter is then passed to this

server.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send("Hello world typescript");
});


(async () => {
  try{
      await datasource.initialize()
      logger.info('connected')
      server.listen(3000, () => {
        logger.info("server listening to 3000");
      });
  }catch {
    logger.error("Failed to connect to db")
    process.exit(1)
  }
  

})();



