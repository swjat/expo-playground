import { LoggerFactoryOptions, LogGroupRule, LogLevel, LoggerFactory, LFService } from 'typescript-logging';

// Doc: https://github.com/vauxite-org/typescript-logging/blob/HEAD/docs/latest_log4j.md

const loggerOptions = new LoggerFactoryOptions();
loggerOptions.addLogGroupRule(new LogGroupRule(new RegExp("service.+"), LogLevel.Trace));
loggerOptions.addLogGroupRule(new LogGroupRule(new RegExp("ui.+"), LogLevel.Trace));

export const loggerFactory: LoggerFactory = LFService.createNamedLoggerFactory("IT-REX_logger", loggerOptions);
