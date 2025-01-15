<!-- @format -->

# Import

## ES Module

```js
import { Logger } from "pastel-logger";
```

## Common JS

```js
const { Logger } = require("pastel-logger");
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

// normal
logger.log("This is a log message");

// debug
logger.debug("This is a debug message");

// warn
logger.warn("This is a warning message");

// error
logger.error("This is an error message");

// info
logger.info("This is an info message");

// success
logger.success("This is a success message");

// blank (possibly hides on most terminals, avoiding attention)
// useful for logs that aren't a priority over other logs
// but doesn't mean they should be excluded altogether
logger.blank("This is a log message");

// custom color (hex)
logger.log("This is a log message", "#694200");
```
