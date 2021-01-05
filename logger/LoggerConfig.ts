import { LoggerFactoryOptions, LogGroupRule, LogLevel, LoggerFactory, LFService } from "typescript-logging";

// NPM: https://www.npmjs.com/package/typescript-logging
// GitHub: https://github.com/vauxite-org/typescript-logging
// Doc: https://github.com/vauxite-org/typescript-logging/blob/HEAD/docs/latest_log4j.md

const loggerOptions = new LoggerFactoryOptions();
// loggerOptions.addLogGroupRule(new LogGroupRule(new RegExp("service.+"), LogLevel.Info));
// loggerOptions.addLogGroupRule(new LogGroupRule(new RegExp("ui.+"), LogLevel.Info));
loggerOptions.addLogGroupRule(new LogGroupRule(new RegExp(".+"), LogLevel.Info));

export const loggerFactory: LoggerFactory = LFService.createNamedLoggerFactory("IT-REX_logger", loggerOptions);
