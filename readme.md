<!-- @format -->

# Import

```js
import { Logger } from "pastel-logger";
```

# Initialization

```js
// system timezone
const logger = new Logger();

// custom timezone
const logger = new Logger({ tz: "Asia/Calcutta" });

// custom time string format
const logger = new Logger({ format: "DD-MM-YYYY hh:mm:ss" });
```

# Usage

```js
const { Logger } = require("pastel-logger");

const logger = new Logger();

// general methods
logger.log("This is a log message");
logger.debug("This is a debug message");
logger.warn("This is a warning message");
logger.error("This is an error message");
logger.info("This is an info message");
logger.success("This is a success message");

// log levels
logger.log("This is a debug message", "debug");
logger.log("This is a warning message", "warn");
logger.log("This is an error message", "error");
logger.log("This is an info message", "info");
logger.log("This is a success message", "success");

// custom color (hex)
logger.log("This is a log message", "#694200");

// disable bold text
// all logs are bold by default (except logger#blank)
// but if you need a custom colored text without bold:
logger.log("This is a log message", "#694200", false);

// blank (possibly hides on most terminals, avoiding attention)
// useful for logs that aren't a priority over other logs
// but doesn't mean they should be excluded altogether
logger.blank("This is a log message");
```
