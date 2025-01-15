<!-- @format -->

```js

import { Logger } from "pastel-logger";
                or
const { Logger } = require("pastel-logger");

const logger = new Logger({ tz: "Asia/Kolkata" });

logger.debug("This is a debug message");
logger.warn("This is a warning message");
logger.error("This is an error message");
logger.info("This is an info message");
logger.success("This is a success message");
logger.blank("This is a log message");
logger.log("This is a log message",);
logger.log("This is a log message", "#694200");


constructor options ?: { tz?: string = "GMT"; format?: string = ""; };

<Logger>.info(content: string): void;
<Logger>.warn(content: string): void;
<Logger>.debug(content: string): void;
<Logger>.error(content: string): void;
<Logger>.blank(content: string): void;
<Logger>.success(content: string): void;
<Logger>.log(content: string, level?: keyof typeof this.logLevels | `#${string}`): void;
```
