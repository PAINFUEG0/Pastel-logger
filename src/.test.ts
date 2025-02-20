/** @format */

import { Logger } from "./index.js";

const logger = new Logger({
  tz: "Asia/Kolkata",
  format: "DD-MM-YYYY hh:mm:ss"
});

logger.debug("This is a log message\nThis is a log message second line");
logger.warn("This is a log message\nThis is a log message second line");
logger.error("This is a log message\nThis is a log message second line");
logger.info("This is a log message\nThis is a log message second line");
logger.success("This is a log message\nThis is a log message second line");
logger.blank("This is a log message\nThis is a log message second line");
logger.blank("This is a log message\nThis is a log message second line");
logger.log("This is a log message\nThis is a log message second line");
logger.log("This is a log message\nThis is a log message second line", "success");
logger.log("This is a log message\nThis is a log message second line", "#55AAFF");
