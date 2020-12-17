import { loggerFactory } from "./LoggerConfig";

const logService = loggerFactory.getLogger("service.ClassNameHere");
const logUi = loggerFactory.getLogger("ui.ClassNameHere");

export class LoggerExample {
  public doSomeLogs(): void {
    // service log
    logService.trace("Service TRACE log");
    logService.debug("Service DEBUG log");
    logService.info("Service INFO log");
    // logService.warn("Service WARN log");
    // logService.error("Service ERROR log");
    // logService.fatal("Service FATAL log");

    // UI log
    // logUi.trace("UI TRACE log");
    // logUi.debug("UI DEBUG log");
    // logUi.info("UI INFO log");
    logUi.warn("UI WARN log");
    // logUi.error("UI ERROR log");
    // logUi.fatal("UI FATAL log");

    // lambda log
    const name = "IT-REX";
    logService.info(() => "This is: " + name);
  }
}
