import * as logger from "winston";

logger.configure({
    level: "debug",
    transports: [new logger.transports.Console()],
});
export { logger };
