import { createLogger, transports, format } from "winston";

const logger = createLogger({
    level: "info",
    transports: [new transports.Console()],
    format: format.json()
});

export default logger;
