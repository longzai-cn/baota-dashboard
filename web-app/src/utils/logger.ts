import { isDevelopment } from "./environment";


export class Logger {
  static log(...args: any[]) {
    if (isDevelopment) {
      console.log(...args);
    }
  }
  static debug(...args: any[]) {
    if (isDevelopment) {
      console.debug(...args);
    }
  }
  static error(...args: any[]) {
    if (isDevelopment) {
      console.error(...args);
    }
  }
  static warn(...args: any[]) {
    if (isDevelopment) {
      console.warn(...args);
    }
  }
  static info(...args: any[]) {
    if (isDevelopment) {
      console.info(...args);
    }
  }
}
