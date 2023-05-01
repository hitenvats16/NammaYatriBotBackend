import { Router, json } from "express";

import cors from "cors"
import logger from "./logger.js";
import "../database/index.js"

const appConfig = Router()

appConfig.use(json())
appConfig.use(logger)
appConfig.use(cors())
export default appConfig