/** @format */

import "moment-timezone";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const logLevels = {
  info: "#5ADAF1",
  warn: "#FFAA00",
  debug: "#CF9FFF",
  error: "#FF5555",
  success: "#53F00D"
} as const;

momentDurationFormatSetup(moment);

export class Logger {
  readonly #timezone?: string;
  readonly #formatString!: string;

  constructor(op?: { tz?: string; format?: string }) {
    this.#timezone = op?.tz;
    this.#formatString = op?.format ?? "DD-MM-YYYY hh:mm:ss";
  }

  info(content: string) {
    this.log(content, "info");
  }

  warn(content: string) {
    this.log(content, "warn");
  }

  debug(content: string) {
    this.log(content, "debug");
  }

  error(content: string) {
    this.log(content, "error");
  }

  success(content: string) {
    this.log(content, "success");
  }

  blank(content: string) {
    this.log(content, "#555555", false);
  }

  #colorizeText(content: string, hex: `#${string}`, bold: boolean) {
    const [r, g, b] = [
      parseInt(hex.substring(1, 3), 16),
      parseInt(hex.substring(3, 5), 16),
      parseInt(hex.substring(5, 7), 16)
    ];

    return `${bold ? "\x1b[1m" : ""}\x1b[38;2;${r};${g};${b}m${content}\x1b[0m`;
  }

  get #time() {
    if (this.#timezone) return moment().tz(this.#timezone).format(this.#formatString);
    return moment().format(this.#formatString);
  }

  log(
    content: string,
    level: keyof typeof logLevels | `#${string}` = "debug",
    bold: boolean = true
  ) {
    const time = this.#colorizeText(this.#time, "#AAAAAA", bold);

    const formattedContent = content.includes("\n")
      ? content
          .split("\n")
          .map((_, i) => (i === 0 ? _ : " ".repeat(this.#formatString.length + 1) + _))
          .join("\n")
      : content;

    if (level in logLevels)
      //@ts-expect-error No errors just loose typing
      return console[level === "success" ? "log" : level](
        //@ts-expect-error No errors just loose typing
        `${time} ${this.#colorizeText(formattedContent, logLevels[level], bold)}`
      );

    return console.log(
      `${time} ${this.#colorizeText(formattedContent, level as `#${string}`, bold)}`
    );
  }
}
