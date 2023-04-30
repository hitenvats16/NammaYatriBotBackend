import { Router, json } from "express";

import logger from "./logger.js";
import "../database/index.js"

const appConfig = Router()

appConfig.use(json())
appConfig.use(logger)

export default appConfig