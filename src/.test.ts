/** @format */

import { Logger } from "./logger.js";

const logger = new Logger({ tz: "Asia/Kolkata" });

logger.debug("This is a log message\nThis is a log message second line");
logger.warn("This is a log message\nThis is a log message second line");
logger.error("This is a log message\nThis is a log message second line");
logger.info("This is a log message\nThis is a log message second line");
logger.success("This is a log message\nThis is a log message second line");
logger.blank("This is a log message\nThis is a log message second line");
logger.blank("This is a log message\nThis is a log message second line");
logger.log("This is a log message\nThis is a log message second line");
